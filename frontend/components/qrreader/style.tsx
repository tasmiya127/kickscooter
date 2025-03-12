import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body:{
        backgroundColor:'#000000',
        height:'100%',
        flex:1
    },
    textBox:{
        padding: "2%", 
        color: "#EE3936", 
        fontFamily: "Digital", 
        width:'90%', 
        fontSize:20,
        borderBottomWidth:1,
        borderColor:'#EE3936'
    },
    button:{
        borderWidth:1,
        borderColor:'#EE3936',
        padding:'2%',
        borderRadius:15
    },
    buttonView:{
        alignItems:'center',
        alignSelf:'center'
    }
});

export default styles