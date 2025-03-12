import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        width: "90%",
        alignContent: "center",
        alignSelf: "center",
    },
    rowstyles: {
        flexDirection: "row",
        justifyContent:'space-between'
    },
    ad1text: {
        color: '#000000',
        fontFamily: 'monster-semi',
        fontSize: 15,
        left: 185,
        marginTop: "5%"
    },
    text: {
        color: '#039be5',
        fontSize: 15,
        left: -40,
        top: 100
    },
    ad1: {
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: '#EE3936',
        borderRadius: 25,
        alignContent: "center",
        alignSelf: "center",
        width: '100%',
        margin:'5%',
        height: 150,
        marginLeft: "8%"
    },
    ad1img: {
        width: wp("40%"),
        height: hp("8%"),
        top: "5%",
        marginLeft: '1%',
        marginTop: "5%",
        borderRadius: 20,
        position: "absolute"
    },
    boardimg: {
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    blue:
    {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 1,
        left: -80,
    },
    set:
    {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 1, 
        left: 80,
    },
    body: {
        backgroundColor: '#000000',
        height: '100%',
        flex:1
    },
});

export default styles