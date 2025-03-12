import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ScrollView} from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import FontHelper from "../utils/FonthelperStyle";
import TopHeader from "../utils/header";
import SwitchSelector, { ISwitchSelectorOption } from "react-native-switch-selector";
import * as Ably from 'ably';
let image// = require('../../assets/switch.png')
let images //= require('../../assets/off.png')

var apiKey = 'Wm7nzQ.ltIS3g:S8HMaLqi00nIleq04eTD0ogTcghzGhrZjdRZ2qIOhf0';
var client = new Ably.Realtime({key: apiKey});
var subChannels = client.channels.get("IotDeviceData");

const Enddrive = (props: { navigation: any; }) => {
  const username = props.navigation.state.params.username;
  const name = props.navigation.state.params.name;
  const [switchValue, setSwitchValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [speed, setSpeed] = useState('');
  const [bat, setBat] = useState(Number);
  const [odomtr, setodo] = useState('');
  const [tripd, settrip] = useState('');
  const [temp, settemp] = useState(' ');
  const [headlamp,setheadlamp] = useState('');
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
  let ir =0;
  let il = 0;
  


  const Switch1 = (dataValue: string | number | ISwitchSelectorOption) => {
    if (dataValue == "true") {
      setPowerOff()
    }
    else{
      setPowerOn()
    }
  };

  function setPowerOff(){
    setSwitchValue(false)
  }

  function setPowerOn(){
    setSwitchValue(true)
  }
    useEffect(()=>{
    const getData = () => {
      if(switchValue == true){
        subChannels.subscribe('Dynamic_data/board01_iot01_bat01',function(msg:any){
          let x = JSON.parse(msg.data)
          batt = x.params.battery;
          odo = x.params.odo_mtr;
          vspeed = x.params.speed;
          tripdi = x.params.trip;
          triptim = x.params.trip_time;
          setData(batt,odo,vspeed,tripdi)
        })
        subChannels.subscribe('Event_data/board01_iot01_bat01',function(msg:any){
          let y= JSON.parse(msg.data)
          tempr = y.params.temp_c;
          ir = y.params.indicator.right;
          il = y.params.indicator.left;
          hl = y.params.headlamp;
          setData2(tempr,ir,il,hl);
        })
      }else{
        subChannels.unsubscribe('Dynamic_data/board01_iot01_bat01');
        subChannels.unsubscribe('Event_data/board01_iot01_bat01');
      }
    }
    const setData = (battery: any,odometer: any,vspeed:any,tripdi:any) => {
      setBat(battery);
      setodo(odometer);
      setSpeed(vspeed);
      settrip(tripdi);
      settriptime(tripti);
    }
    const setData2 = (tempr:any,indiri:any,indile:any,headla:any) => {
      settemp(tempr);
      if(indiri == 0){
        setIRHide(false);
      }else{
        setIRHide(true);
      }
      if(indile == 0){
        setILHide(false);
      }else{
        setILHide(true);
      }
      setheadlamp(headla);
    }
    getData()
  },[switchValue,visible])

  let data = {
    'username':username,
    'speed':speed,
    'battery':bat,
    'triptime':tripti,
    'name':username,
    'odo_mtr':odomtr,
    'props':props.navigation.state.params.propData
  }

  return (

    <View style={styles.body}>
        <View>
          <View>
            <TopHeader props={props.navigation.state.params.propData} />
          </View>
          <View style={styles.logo}>
            <Text style={{ fontSize: 25, textAlign: "center", color: "red", position: "absolute", fontFamily: 'monster-med', }}>MIT001 </Text>
            <Text style={{ color: "white", fontSize: 110}}>
              {switchValue ? <TouchableOpacity style={styles.meter}><TouchableOpacity style={styles.meter2}>
                <Text style={{ fontFamily: 'Digital', marginTop: "10%", color: "white", fontSize: 70 }}>{speed}.0</Text>
                <Text style={{ color: "#EE3936", position: "absolute", top: "40%", fontSize: 10 }}>kmph</Text>
                <Text style={{ color: "#EE3936", position: "absolute", top: "50%", left: "20%", fontSize: 15 }}>mode :</Text>
                <View style={{}}>
                  <Text style={{ marginTop: "14%", color: "#00FF00" }}>ECO</Text>
                  <Text style={{ color: "#000" }}>D</Text>
                  <Text style={{ color: "#000" }}>S</Text>

                </View>
                <View>
                    {ILHide ?(<Image style={{ left: "9%", top: "10%" }} source={require('../../assets/green.png')} />):null}
                  </View>
                  <View>
                    {IRHide ? (<Image style={{ left: "-9%", top: "10%", transform: [{ rotate: "180deg" }] }} source={require('../../assets/green.png')} />):null}
                  </View>
              </TouchableOpacity></TouchableOpacity> : <TouchableOpacity style={styles.meter3}>
                <TouchableOpacity style={styles.meter2}><Text style={{ marginTop: "20%", color: "white", fontSize: 25 }}>Total Distance</Text>
                  <Text style={{ color: "#EE3936", fontSize: 15 }}>{odomtr}.00Km</Text>
                  <Text style={{ color: "white", fontSize: 25 }}>Trip Distance</Text>
                  <Text style={{ color: "#EE3936", fontSize: 15 }}>{tripd}.0 Km</Text>


                </TouchableOpacity></TouchableOpacity>}
            </Text>

            <View>
              <Text style={{ left: "-15%", color: "#EE3936", fontSize: 15 }}>Current Battery Level : {bat}%</Text>
              <Text style={{ left: "-15%", color: "#EE3936", fontSize: 15 }}>Scooter Status : Unlocked</Text>
            </View>
            <View style={styles.line} />
            <TouchableOpacity style={styles.bulb}>
              <Ionicons name="bulb-outline" size={20} color="#EE3936" style={{ padding: "30%", }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.met}>
              <Image style={{ position: "absolute", left: "10%", top: "10%" }} source={require('../../assets/meter.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flash}>
              <Image style={{ position: "absolute", left: "10%", top: "10%" }} source={require('../../assets/flashlight.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.health}>
              <Ionicons name="medkit-outline" size={20} color="#EE3936" style={{ padding: "30%" }} />
            </TouchableOpacity>

            <View style={{ width: "50%", height: "10%", top: "-25%", left: "-5%", alignContent: "center", alignSelf: "center", transform: [{ rotate: "-90deg" }] }}>
              <SwitchSelector
                initial={0}
                onPress={value => Switch1(value)}
                textColor='grey'
                fontSize={12}
                selectedColor="#000"
                buttonColor="#EE3936"
                borderRadius={100}
                buttonMargin={2}
                borderColor="grey"
                height={80}
                imageStyle={{ width: "50%" }}
                style={{ width: "100%" }}
                backgroundColor='#000'
                hasPadding
                options={[
                  { label: "", value: "true", imageIcon: images = require('../../assets/switch.png') }, 
                  { label: "", value: "false", imageIcon: image = require('../../assets/off2.png') },
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
              />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.buttonEndRide}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.buttonText}>End Ride</Text>
                </TouchableOpacity>
              </View>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are You sure You want to end the Ride ?</Text>
                    <TouchableOpacity style={{ flexDirection: "row" }}>

                      <TouchableOpacity ><TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => props.navigation.navigate("feedback", { data })}>
                        <Text style={styles.textStyle}>YES</Text>
                      </TouchableOpacity></TouchableOpacity>
                      <TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>NO</Text>
                        </TouchableOpacity></TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
    </View>

  )
}

export default Enddrive;

