import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SwitchSelector, { ISwitchSelectorOption } from "react-native-switch-selector";
let image
let images

const Toggle = (props:any) => {

  return (
    <View style={styles.container} >
      <SwitchSelector style={styles.switchstyles}
        initial={0}
        onPress={props.onValueChange}
        textColor='grey'
        selectedColor="#000"
        buttonColor="#EE3936"
        borderRadius={100}
        buttonMargin={1}
        borderColor="grey"
        height={90}
        imageStyle={{ width: "40%" }}
        backgroundColor='#000'
        hasPadding
        options={[
          { label: "", value: props.value.toString(), imageIcon: images = require('../../assets/switch.png') },
          { label: "", value: props.value.toString(), imageIcon: image = require('../../assets/off2.png') },
        ]}
      />
    </View>
  )

}
const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'center',
   },
   switchstyles:{
    
    width: "50%", 
    transform: [{ rotate: "-90deg" }],
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center'
   }
})

export default Toggle;