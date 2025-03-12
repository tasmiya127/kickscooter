import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    logo:{
        alignItems: 'center',
        width:"90%",
        height:"90%",
        paddingTop:20,
        alignContent:"center",
        alignSelf:"center",
       
    },
    img:{
        
        alignContent:"center",
        alignItems:"center"
    },
    boardimg:{
        alignContent:"center",
        alignItems:"center",
        paddingTop:20,
        paddingBottom:40, 
        marginBottom:"5%"
    },
    img2:{
        
        alignContent:"center",
        alignItems:"center",
        width:330,
        borderWidth:3,
        borderColor:"#EE3936",
        position:"absolute",
        top:35,
        left:-65,
        height:600,//495,
        borderRadius:500
    },
    img3:{
        alignContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:"#EE3936",
        width:330,
        position:"absolute",
        top:36,
        left:-65,
        height:143,
        borderRadius:500
    },
    
    body:{
        backgroundColor:'#000000',
        height:'100%',
        width:'100%'
    },
    btnComponent:{
        //paddingTop:"35%",
        color:'#101010',
        
        
    },
    button:{
        backgroundColor:'#000000',
        width:200,
        right:'15%',
       
        
        //borderRadius:15,
        // borderTopLeftRadius: 15,
    },
    buttonText:{
        textAlign:"center",
        borderWidth:3,
        borderColor:"#EE3936",
        borderTopLeftRadius: 25,
        //borderRadius:50,
        fontFamily:"monster-semi",
        marginBottom:"10%",
        color:'#EE3936',
        alignContent:"center",
        alignItems:"center",
       padding:10,
        paddingBottom:10,
        fontSize:20,
       
    },
    button1:{
        backgroundColor:'#000000',
        width:200,
        left:'20%',
       
        //borderRadius:15,
        // borderTopLeftRadius: 15,
    },
    buttonText1:{
        textAlign:"center",
        borderWidth:3,
        fontFamily:"monster-semi",
        borderColor:"#EE3936",
        borderBottomRightRadius: 25,
        //borderRadius:50,
        color:'#EE3936',
        alignContent:"center",
        alignItems:"center",
       paddingTop:10,
        paddingBottom:10,
        fontSize:20
    },
    button2:{
        backgroundColor:'#000000',
        width:200,
        
        padding:'10%',
        alignContent:'center',
        alignSelf:"center",
        
        //borderRadius:15,
        // borderTopLeftRadius: 15,
    },
    buttonText2:{
        textAlign:"center",
        top:"10%",
        color:'#EE3936',
        // alignContent:"center",
        // alignItems:"center",
        fontFamily:"monster-semi",
        fontSize:30,
        // textAlignVertical:"center",
        width:335,
        height:hp("20%"),
        left:-100,
      // paddingVertical:'20%',
    },
    hover:{
        
        borderWidth:1,
        borderColor:"grey",
        backgroundColor:"#000000",
        borderRadius:100,
        position:"absolute",
        alignContent:"center",
        alignSelf:"center",
        width:80,
        top:100,
        height:40,

      
     

    },
    circle:{
        borderWidth:3,
        borderColor:"#000000",
        backgroundColor:"#EE3936",
        borderRadius:100,
        position:"absolute",
        left:103,
        width:35,
        top:103,
        height:35, 
    },
    button3:{
        backgroundColor:'#000000',
        width:200,
        
        //left:-100,
        padding:'10%',
        alignContent:'center',
        alignSelf:"center",
        
        //borderRadius:15,
        // borderTopLeftRadius: 15,
    },
    buttonText3:{
        textAlign:"center",
        borderRadius:300,
        color:'#EE3936',
        alignContent:"center",
        alignItems:"center",
        width:335,
        height:600,
        left:-100,
       
        
        fontSize:20
    },
    ad1text:{
  
        color:'#EE3936',
    
        fontSize:20,
        width:335,
        height:165,
        left:20,
        top:-70,
      // paddingVertical:'20%',

    },
    ad2text:{
  
        color:'#EE3936',
    
        fontSize:20,
        width:335,
        height:165,
        left:10,
        top:-70,
      // paddingVertical:'20%',

    },
    ad3text:{
  
        color:'#EE3936',
    
        fontSize:20,
        width:335,
        height:165,
        left:10,
        top:-70,
      // paddingVertical:'20%',

    },
    ad1:{
        
        borderWidth:1,
        borderColor:"grey",
        backgroundColor:"#000000",
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        position:"absolute",
        alignContent:"center",
        alignSelf:"center",
        width:'190%',
        top:100,
        height:150,

      
     

    },
    ad1img:{
        width:104,
        height:110,
        left:130,
        top:14,
        paddingTop:20,
        paddingBottom:50,

    },
    ad2:{
        
        borderWidth:1,
        borderColor:"grey",
        backgroundColor:"#000000",
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        position:"absolute",
        alignContent:"center",
        alignSelf:"center",
        width:'190%',
        top:260,
        height:150,

      
     

    },
    ad2img:{
        width:100,
        height:"70%",
        left:130,
        top:20,
        //paddingTop:20,
        paddingBottom:50,

    },
    ad3:{
        
        borderWidth:1,
        borderColor:"grey",
        backgroundColor:"#000000",
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        position:"absolute",
        alignContent:"center",
        alignSelf:"center",
        width:'190%',
        top:420,
        height:150,

      
     

    },
    ad3img:{
        width:100,
        height:100,
        left:130,
        top:20,
        paddingTop:20,
        paddingBottom:50,

    },
    adtext1:{
            
        borderWidth:3,
        borderColor:"#EE3936",
        borderRadius:300,
        color:'#EE3936',
        width:335,
        height:600,
        left:-100,
      // paddingVertical:'20%',
       
        
        fontSize:20},
    text1:{
        flexDirection:"row",
       
        alignContent:"space-between"
    },
    
   
});

export default styles