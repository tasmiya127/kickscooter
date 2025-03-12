const express = require('express')
const app = express();
var awsIot = require('aws-iot-device-sdk');
var Ably = require('ably');
require('dotenv').config() ;
var CLIENT_ID = '';
var ably = new Ably.Realtime(process.env.ABLY_KEY);
var pubChannels = ably.channels.get("IotDeviceData");
if(process.env.Deployment == 'dev'){
    CLIENT_ID = 'myAwsDevClientId'
}else{
    CLIENT_ID = 'myAwsProdClientId'
}
var md5 = require('md5');
const bodyParser = require('body-parser');

const mongoClient = require('mongodb').MongoClient
var jwt = require('jsonwebtoken');
function initialize(){
    const uri = process.env.MONGO_URI;
    const client = new mongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        if (err) {
            console.log("error");
            console.log(err);
            client.close();
        } else {
            var server = awsIot.device({
                privateKey: process.env.PRIVATE_KEY,
                clientCert: process.env.CLIENT_CERT,
                caCert: process.env.CA_CERT,
                clientId: CLIENT_ID,
                host: process.env.IoT_Thing_EndPoint
             });
            
            
             server
              .on('connect', function() {
                console.log('connect');
                server.subscribe('Dynamic_data/+');
                server.subscribe('Event_data/+');
                server.subscribe('Status_data/+');
            });
            server
            .on('message', function(topic, payload) {
                // console.log(payload.toString())
                let topicContents = topic.split('/')
                if(topicContents[0] == 'Dynamic_data'){
                    pubChannels.publish('Dynamic_data/'+topicContents[1],payload.toString())  
                } else if(topicContents[0] == 'Event_data') {
                    pubChannels.publish('Event_data/'+topicContents[1],payload.toString())
                } else if(topicContents[0] == 'Status_data') {
                    pubChannels.publish('Status_data/'+topicContents[1],payload.toString())
                }
                console.log('message', topic, payload.toString());
            });
            console.log("connected to db ");
            app.use(express.static('pages'));
            // app.use(cors());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            const kickscooterCollection = client.db("mevv").collection("kickscooter");
            const listingCollection = client.db("mevv").collection("listing");
            

            //login related path
            app.post('/kickscooter/login',function(req,res){
                handleLogin(req.body,res,kickscooterCollection);
            });
            app.post('/kickscooter/validateToken',function(req,res){
                console.log('in validating token');
                authenticateJWT(req,res);
            });
            app.get('/kickscooter/getImages',function(req,res){
                console.log('inside')
                handleGetImages(res,listingCollection);
            });
            app.post('/kickscooter/scanner',function(req,res){
                console.log('inside')
                data = handlescan(req);
                res.json({data:data})
            });
        }
    });
}

app.listen(4000,function(){     
    console.log('listening 4000 port');
    initialize();
});



function handleLogin(credentials,res,kickscooterCollection) {
    var userObj = JSON.parse(Object.keys(credentials)[0]);
    var query = { "username": userObj.username,"password":md5(userObj.pass)};
    kickscooterCollection.find(query, { projection: { _id: 0 } }).toArray()
        .then(results => {
            if (results.length > 0) {
                userObj.role = results[0].role;
                jwt.sign({ user: userObj }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
                    res.setHeader('content-type', 'Application/json');
                    res.statusCode = 200;
                    res.json({"response_desc":"Login Successful",token: token,owner:results[0].username,role:results[0].role});
                    log.info('Hello World');
                })
            }
            else {
                res.setHeader('content-type', 'Application/json');
                res.statusCode = 401;
                res.json({ "response_desc": "Invalid credentials" });
            }
        }).catch(error=>{
            console.log(error);
            res.setHeader('content-type', 'Application/json');
            res.statusCode = 500;
            res.json({ "response_desc": "Internal Server Error" });
        });
}


function handleGetImages(res,listingCollection) {
    listingCollection.find({},{ projection: { _id: 0 } }).toArray()
    .then(result =>{
       // console.log(result)
        if(result.length > 0) {
            res.setHeader('content-type', 'Application/json');
            res.statusCode = 200;
            res.json({ "response_desc": "success",result });
        }
        else{
            res.setHeader('content-type','Application/json');
            res.statusCode=409;
            res.json({"response_desc":"data not found"})
        }
      
    })
    .catch(error=>{
        console.log(error);
        res.setHeader('content-type','Application/json');
        res.statusCode= 500;
        res.json({"response_desc":"internal Server Error"});
    })
}

function handlescan(req,res) {
    var codedata=req.body
    var data=JSON.parse(Object.keys(codedata)[0]).data;
    console.log(data)
   let isValiddata = false
   var code=["121","122","123","124","125","126","127","128","129","130"]
   var code2=["221","222","223","224","225","226","227","228","229","230"]
   
   for (i = 0; i < code.length; i++) { 
        if(data == code[i])
        {
            data = {
                message:'Success',
                status:1
            }
            isValiddata = true
        }
    }
    if(!isValiddata){
        data={
            message:'Fail',
            status:0
        }
        console.log("fail");
    }
    return data;
}

const authenticateJWT = (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'secretkey', (err, user) => {
            console.log(user)
            if (err) {
                if (err.name == "TokenExpiredError") {
                    // return res.sendStatus(403);
                    res.statusCode = 403;
                    return res.json({ "response_desc": "Token Expired" })
                }
                else {
                    res.statusCode = 403;
                    return res.json({ "response_desc": "Forbidden" })
                }
            }
            return res.json({ "response_desc":"Success","name":user.user.username ,"role":user.user.role})
        });
    } else {
        res.statusCode = 401;
        res.json({ "response_desc": "Unauthorized" })
    }
};