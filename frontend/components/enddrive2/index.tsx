import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import FontHelper from "../utils/FonthelperStyle";
import TopHeader from "../utils/header";
import Circle from "../utils/circle";
import Toggle from "../utils/toggle";
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Enddrive = (props: { navigation: any; }) => {
  const username = props.navigation.state.params.username;
  const name = props.navigation.state.params.name;
  const [modalVisible, setModalVisible] = useState(false);
  const [Power, setPower] = useState(false);
  const [speed, setSpeed] = useState('');
  const [bat, setBat] = useState(Number);
  const [odomtr, setodo] = useState('');
  const [tripd, settrip] = useState('');
  const [temp, settemp] = useState(' ');
  const [headlamp, setheadlamp] = useState('');
  const [IRHide, setIRHide] = useState(false);
  const [ILHide, setILHide] = useState(false);
  const [tripti, settriptime] = useState('');
  const [visible, setVisible] = useState(false);
  let batt = 0;
  let odo = 0;
  let vspeed = 0;
  let tripdi = 0;
  let triptim = 0;
  let tempr = 0;
  let hl = 0;
  let ir = 0;
  let il = 0;

  let data = {
    'username': username,
    'speed': speed,
    'battery': bat,
    'triptime': tripti,
    'name': username,
    'odo_mtr': odomtr,
    'props': props.navigation.state.params.propData
  }

  let circledata = {
    'speed': speed,
    'IR': IRHide,
    'IL': ILHide,
    'switch': Power
  }

  const toggle = (value: any) => {
    if (value === 'false') {
      setPower(true)
    } else {
      console.log(value)
      setPower(false)
    }
  }

  useEffect(() => {

  }, [Power])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TopHeader props={props.navigation.state.params.propData} />
      </View>
      <View style={styles.mid}>
        <Circle props={circledata} />
      </View>
      <View style={styles.line} />
      <View style={{flex:0.1,marginTop:'10%'}}>
        <View style={styles.buttonViewStyles}>
          <TouchableOpacity style={styles.OutlineCircle}>
            <MatIcons name="lightbulb-on-outline" size={30} color='red' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.OutlineCircle}>
            <MatIcons name="lightbulb-group-outline" size={30} color='red' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.switch}>
        <Toggle value={Power} onValueChange={toggle} />
      </View>
      <View style={{flex:0.1,marginBottom:'10%'}}>
      <View style={styles.buttonViewStyles}>
        <TouchableOpacity style={styles.OutlineCircle}>
          <MatIcons name="speedometer" size={30} color='red' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.OutlineCircle}>
          <MatIcons name="hospital" size={30} color='red' />
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.midmodal}>
        <Text style={{ color: "red" }}>hhh</Text>
      </View>
    </View>
  )
}

export default Enddrive;

