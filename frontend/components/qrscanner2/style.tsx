import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: "85%",
        overflow: 'hidden',
        borderRadius: 30,
        borderWidth:1,
        borderColor:"grey",
        marginTop:"20%"
    },
    button:{     
        marginTop:"15%",
        borderRadius:50,
        borderWidth:1,
        borderColor:"grey",
        backgroundColor:"#000"    
    },
});

export default styles