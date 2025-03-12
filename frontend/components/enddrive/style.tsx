import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        width: "90%",
        height: "90%",
        alignContent: "center",
        alignSelf: "center",
    },
    meter: {
        width: 270,
        height: 270,
        borderWidth: 3,
        borderColor: "#340C0C",
        backgroundColor: "#340C0C",
        borderRadius: 200
    },
    meter3: {
        width: 270,
        height: 270,
        borderWidth: 3,
        borderColor: "#D81B1B",
        backgroundColor: "#D81B1B",
        borderRadius: 200
    },
    meter2: {
        width: 230,
        height: 230,
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        top: "7%",
        position: "absolute",
        borderWidth: 3,
        borderColor: "#340C0C",
        backgroundColor: "#000000",
        borderRadius: 210
    },
    line: {
        borderColor: "#EE3936",
        color: 'grey',
        backgroundColor: 'grey',
        height: 1,
        width: '90%',
        margin: '5%'
    },
    bulb:
    {
        width: "16%",
        height: "9%",
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 1, left: "-35%",
        top: "2%"
    },
    met: {
        width: "16%",
        height: "9%",
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 1,
        left: "-35%",
        top: "8%"
    },
    health:
    {
        width: "16%",
        height: "9%",
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 1, left: "34%",
        top: "-9%",
    },
    flash: {
        width: "16%",
        height: "9%",
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 1,
        left: "35%",
        top: "-16%"
    },
    middle:
    {
        width: "24%",
        height: "24%",
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 1,
        left: "0%",
    },
    midcircle: {
        width: "85%",
        height: "45%",
        borderRadius: 50,
        backgroundColor: "#EE3936",
        borderColor: "#EE3936",
        borderWidth: 1, left: "7%",
        position: "absolute"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    modalView: {
        margin: 20,
        backgroundColor: "#000000",
        borderWidth: 2,
        borderColor: "#EE3936",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: "#000000",
        borderWidth: 2,
        borderColor: "#EE3936",
        paddingLeft: "25%",
        margin: "5%"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        left: "-10%"
    },
    textStyle1: {
        color: "grey",
        top: "-100%"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "white"
    },
    button1: {
        borderColor: "red",
        borderWidth: 2,
        width: "100%",
        height: "100%",
        borderRadius: 50
    },
    body: {
        backgroundColor: '#000000',
        height: '100%',
    },
    buttonView:{
        top:-100
    },
    buttonEndRide:{
        borderWidth:1,
        borderColor:'red',
        padding:'3%',
        borderRadius:15
    },
    buttonText:{
        color:'red'
    }
});

export default styles