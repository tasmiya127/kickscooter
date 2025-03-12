import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo:{
        alignItems: 'center',
        width:"70%",
        paddingTop:50,
        alignContent:"center",
        alignSelf:"center"
       
    },
    img:{
        width:'100%',
        alignContent:"center",
        alignItems:"center"
    },
   
    img1:{
        marginTop:"30%",
        top:"200%",
        width:"10%",
        marginLeft:"0%",
        height:"50%",
        position:"absolute",
        //left:-100
    },
    img5:{
        // paddingTop:285,
        position:"absolute",
        left:-100,
      
    },
    introComponent:{
        paddingTop:10,
        alignContent:"center",
        alignSelf:"center"
    },
    intro:{
        color:'#EE3936',
        fontSize:45,
        textAlign:"center",
        fontFamily:"monster-semi",
        alignContent:"center",
        //fontFamily:'Digital',
        paddingBottom:30,
        left:"-20%",
        //textShadowColor:'#EE3936',
        //textShadowOffset:{width: -3, height: 2},
        //textShadowRadius: 35,
    },
    
    line:{
        color:'#EE3936',
        
        //width:"100%",
        //height:"1%",
        //backgroundColor:"red",
        //textAlign:"center",
        //alignContent:"center",
        //textShadowColor:'#EE3936',
       // textShadowOffset:{width: -3, height: 2},
        textShadowRadius: 35,

    },
    lines:{
        top:80,
        left:"20%",
        width:"10%"
    },
   
    subTitle:{
        color:'#EE3936',
        fontSize:25,
        textAlign:"center",
        alignContent:"center"
    },
    textBoxes:{
        paddingTop:15,
    },
    text1:{
        flexDirection:"row",
        width:250,
        alignContent:"space-between"
    },
    text2:{
        //flexDirection:"row",
        width:250,
        height:15,
        //alignContent:"space-between",
        top:15
    },
    tb1:{
        width: '100%',
        color: '#EE3936',
        height:"100%",
        borderColor:'#EE3936',
        borderWidth: 1,
        borderTopLeftRadius:20,
        borderBottomRightRadius: 20,
        alignSelf: 'center',
        fontSize:15,
        flexDirection:"row"
        //paddingRight:5
    },
    pass:{
        width: '100%',
        color: '#EE3936',
        height:"11%",
        borderColor:'#EE3936',
        borderWidth: 1,
        borderTopLeftRadius:20,
        borderBottomRightRadius: 20,
        alignSelf: 'center',
        fontSize:15,
        flexDirection:"row"

       
        //paddingRight:5
    },
    name:{
        width: '100%',
        color: '#EE3936',
        height:"7%",
        borderColor:'#EE3936',
        borderWidth: 1,
        borderTopLeftRadius:20,
        borderBottomRightRadius: 20,
        alignSelf: 'center',
        fontSize:15,
        marginTop:"10%",
        flexDirection:"row"

    },
    
    btnComponent:{
        paddingTop:"5%",
        color:'#101010',
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center"
    },
    button:{
        //backgroundColor:'#000000',
        width:210,
        borderRadius:12,
        marginTop:"70%",
        left:"15%"
    },
   

    buttonText:{
        textAlign:"center",
        borderWidth:3,
        borderColor:"#EE3936",
        borderRadius:20,
        backgroundColor:'#000000',
        color:'#EE3936',
        alignContent:"center",
        alignItems:"center",
       paddingTop:10,
       fontFamily:"monster-semi",
        paddingBottom:10,
        fontSize:20
    },
    
    body:{
        backgroundColor:'#000000',
        height:'100%',
        width:'100%'
    },
    user:
    {
        borderColor:'#EE3936',
        borderWidth:10,
        width:10,
        height:10
    },
});

export default styles