import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
const circle = (props:any) => {
    let speed = props.props.speed;
  return(
      <View style={styles.container}>
        <View style={styles.meter}>
            <View style={styles.meter2}>
                <Text style={styles.digifont}>{props.props.switch? speed+'.0':'START'}</Text>
                <Text style={styles.km}>kmph</Text>
                <View style={styles.drivingModesSelector}>
                    <Text style={styles.mode}>Drive Mode : </Text>
                    <TouchableOpacity>
                        <Text style={styles.drivingMode}>ECO &nbsp;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.drivingMode}>Drive &nbsp;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.drivingMode}>Speed</Text>
                    </TouchableOpacity>
                </View>
                {/* <View>
                    {props.props.ILHide ? (<Image style={styles.leftIndicator} source={require('../../assets/green.png')} />) : null}
                </View>
                <View>
                    {props.props.IRHide ? (<Image style={styles.rightIndicator} source={require('../../assets/green.png')} />) : null}
                </View> */}
                <View style={styles.IndicatorView}>
                    <TouchableOpacity>
                        <Image style={styles.rightIndicator} source={require('../../assets/green.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/green.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View> 
  )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    meter: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        borderColor: "#340C0C",
        backgroundColor: "#340C0C",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",    
    },
    meter2: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        borderWidth: 10,
        borderColor: "#340C0C",
        backgroundColor: "#000000",
    },
    digifont:{
        fontFamily: 'Digital', 
        marginTop: "15%", 
        color: "white", 
        fontSize: 50 
    },
    km:{
        color: "#EE3936", 
        fontSize: 10
    },
    mode:{
        color: "#EE3936",  
        fontSize: 12 
    },
    rightIndicator:{
        transform: [{ rotate: "180deg" }] 
    },
    drivingModesSelector:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:'5%',
        fontSize:12
    },
    drivingMode:{
        color:'#00FF00'
    },
    IndicatorView:{
        flexDirection:'row',
        margin:'5%',
        justifyContent:'space-between',
    }
})

export default circle;