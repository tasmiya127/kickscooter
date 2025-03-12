import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    p:{
        color:'#EE3936',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:"Roboto",
        fontSize:45,
        textShadowColor:'#EE3936',
        textShadowOffset:{width: -3, height: 2},
        textShadowRadius: 15,
    },
    logo:{
        alignItems: 'center',
        width:"100%",
        marginTop:"30%",
     
    },
    logoImage:{
        alignItems: 'center',

    },
    img:{
        width:'100%',
        height:"80%",
        
        alignContent:"center",
        alignItems:"center"
    },
    image:{

        position:"absolute", 
        width:'100%',
        height:'100%'
    },
    btnComponent:{
        //paddingTop:240,
        top:"50%",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
    
    },
    button:{
        backgroundColor:'#000000',
        width:200,
        borderRadius:20,
        borderColor:'#EE3936',
        borderWidth:2,
        // top:0

        
    },
    buttonText:{
        textAlign:"center",
        alignContent:"center",
        color:'#EE3936',
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10,
        fontSize:20
    },
    background:{
        backgroundColor:'#000000',
        height:'100%',
        width:'100%'
    }
})

export default styles