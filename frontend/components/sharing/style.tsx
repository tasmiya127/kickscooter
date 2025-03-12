import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        backgroundColor:'#000000'
    },
    headerComponent:{
        flex:0.1
    },
    dataComponent:{
        margin:'5%',
        flex:0.1
    },
    LocationComponent:{
        flexDirection:'row'
    },
    locationHeaderText:{
        color: '#EE3936',
        fontSize:15,
        textAlign:'center'
    },
    locationBodyComponent:{
        color: '#EE3936',
        fontSize:12
    },
    heyText:{
        color: '#EE3936',
        fontSize:17,
        padding:'3%'
    },
    listComponent:{
        marginTop:'10%',
        flex:0.8
    },
    button: {
        borderColor: "red",
        borderWidth: 2,
        borderBottomRightRadius: 20,
        width: "100%",
        alignContent: "center",
        alignSelf: "center",
    },
    buttonTextStyles:{
        fontSize: 20, 
        textAlign: "center", 
        color: "red" 
    }
});

export default styles