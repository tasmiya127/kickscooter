import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    header: {
        flex: 0.1
    },
    mid: {
        flex: 0.6,
    },
    switch: {
        flex: 0.1,
    },
    buttonViewStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%'
    },
    OutlineCircle: {
        borderRadius: 25,
        borderColor: '#999999',
        borderWidth: 1,
        padding: '2%'
    },
    line:
    {
        borderColor: "#EE3936",
        borderWidth:1,
    },
    midmodal:{
        flex:0.1,
        alignItems:'center',
    },
});

export default styles