import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    logo:{
        alignItems: 'center',
        width:"90%",
        height:"90%",
        paddingTop:35,
        alignContent:"center",
        alignSelf:"center",
        position:"absolute" 
    },
    bar:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    img:{
        // left:-82   
    },
    triangle:{
        borderLeftWidth: 400,
        borderRightWidth: 400,
        right:"47%",
        borderBottomWidth: 400,
        borderBottomColor: "#EE3936",
        transform:[{rotate:"-180deg"}]
    },
    image:{  
        width:'100%',
        height:'70%',   
    },
    buttonTopView:{
        marginTop:"5%",
    },
    button1:{
        textAlign:"center",
        borderWidth:1,
        borderColor:"grey",
        color:'#000000',
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        width:"70%",
        marginBottom:"2%",
    },
    photo:{ 
        alignContent:"center",
        alignItems:"center",
        borderRadius:50,
        marginTop:20   
    },
    body:{
        backgroundColor:'#000000',
        height:'100%',
        flex:1
    },
});

export default styles