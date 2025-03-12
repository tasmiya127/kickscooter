import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import SwitchSelector, { ISwitchSelectorOption } from "react-native-switch-selector";
import TopHeader from "../utils/header";
import * as Ably from 'ably';
import Mat from 'react-native-vector-icons/MaterialIcons';

let image
let images
var apiKey = 'Wm7nzQ.ltIS3g:S8HMaLqi00nIleq04eTD0ogTcghzGhrZjdRZ2qIOhf0';
var client = new Ably.Realtime({ key: apiKey });
var subChannels = client.channels.get("IotDeviceData");
const Home = (props: { navigation: { state: { params: { username: any; name: any; text: any; }; }; navigate: (arg0: string) => void; }; }) => {
  const [speed, setSpeed] = useState('');
  const [bat, setBat] = useState(Number);
  const [odomtr, setodo] = useState('');
  const [visible, setVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [temp, settemp] = useState(' ');
  const [headlamp, setheadlamp] = useState('');
  const [IRHide, setIRHide] = useState(false);
  const [ILHide, setILHide] = useState(false);
  let batt = 0;
  let odo = 0;
  let vspeed = 0;
  let tempr = 0;
  let hl = 0;
  let ir = 0;
  let il = 0;
  let data = {
    'screen': 'owner',
    'props': props
  }

  const username = props.navigation.state.params.username;
  const name = props.navigation.state.params.name;

  const Switch1 = (dataValue: string | number | ISwitchSelectorOption) => {
    if (dataValue == "true") {
      setPowerOff()
    }
    else {
      setPowerOn()
    }
  };

  function setPowerOff() {
    setSwitchValue(false)
  }

  function setPowerOn() {
    setSwitchValue(true)
  }

  useEffect(() => {
    const getData = () => {
      if (switchValue == true) {
        subChannels.subscribe('Dynamic_data/board01_iot01_bat01', function (msg: any) {
          let x = JSON.parse(msg.data)
          batt = x.params.battery;
          odo = x.params.odo_mtr;
          vspeed = x.params.speed;
          tempr = x.params.signal_strength;
          setData(batt, odo, vspeed, tempr)
        })
        subChannels.subscribe('Event_data/board01_iot01_bat01', function (msg: any) {
          let y = JSON.parse(msg.data)
          tempr = y.params.temp_c;
          ir = y.params.indicator.right;
          il = y.params.indicator.left;
          hl = y.params.headlamp;
          setData2(tempr, ir, il, hl);
        })
      } else {
        subChannels.unsubscribe('Dynamic_data/board01_iot01_bat01');
        subChannels.unsubscribe('Event_data/board01_iot01_bat01');
      }
    }
    const setData = (battery: any, odometer: any, vspeed: any, tempr: any) => {
      setBat(battery);
      setodo(odometer);
      setSpeed(vspeed);
      settemp(tempr)
    }
    const setData2 = (tempr: any, indiri: any, indile: any, headla: any) => {
      settemp(tempr);
      if (indiri == 0) {
        setIRHide(false);
      } else {
        setIRHide(true);
      }
      if (indile == 0) {
        setILHide(false);
      } else {
        setILHide(true);
      }
      setheadlamp(headla);
    }
    getData()
  }, [switchValue, visible])

  return (

    <View style={styles.body}>
      <ScrollView>
        <View>
          <View style={styles.logo}>
            <View>
              <TopHeader props={data} />
            </View>
            <TouchableOpacity style={styles.blue} onPress={() => props.navigation.navigate("motoclub")}>
              <Image style={{ padding: "-20%", left: "25%", top: "20%" }} source={require('../../assets/bluetooth.png')} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, left: 10, top: 65, marginTop: "10%", color: "red", position: "absolute", fontFamily: 'monster-med', }}>{odomtr} Km</Text>
            <Text style={{ color: "white", fontSize: 110, marginTop: 0, left: 0 }}>
              {switchValue ? <TouchableOpacity style={styles.meter}><TouchableOpacity style={styles.meter2}>
                <Text style={{ fontFamily: 'Digital', marginTop: "10%", color: "white", fontSize: 70 }}>{speed}.0</Text>
                <Text style={{ color: "#EE3936", position: "absolute", top: "40%", fontSize: 10 }}>kmph</Text>
                <Text style={{ color: "#EE3936", position: "absolute", top: "50%", left: "20%", fontSize: 15 }}>mode :</Text>
                <View style={{}}>
                  <Text style={{ marginTop: "14%", color: "#00FF00" }}>ECO</Text>
                  <Text style={{ color: "#000" }}>Drive</Text>
                  <Text style={{ color: "#000" }}>Speed</Text>
                </View>
                <View>
                  <View>
                    {ILHide ? (<Image style={{ left: "9%", top: "0%" }} source={require('../../assets/green.png')} />) : null}
                  </View>
                  <View>
                    {IRHide ? (<Image style={{ left: "-9%", top: "10%", transform: [{ rotate: "180deg" }] }} source={require('../../assets/green.png')} />) : null}
                  </View>
                </View>
              </TouchableOpacity></TouchableOpacity> : <TouchableOpacity style={styles.meter3}>
                <TouchableOpacity style={styles.meter2}><Text style={{ fontFamily: 'Digital', marginTop: "20%", color: "white", fontSize: 70 }}>START</Text>
                  <Text style={{ color: "#EE3936", position: "absolute", top: "51%", left: "20%", fontSize: 15 }}>mode :</Text>
                  <View style={{}}>
                    <Text style={{ marginTop: "4%", color: "#00FF00" }}>ECO</Text>
                    <Text style={{ color: "#000" }}>D</Text>
                    <Text style={{ color: "#000" }}>S</Text>
                  </View>                
                </TouchableOpacity></TouchableOpacity>}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.c}>
                <Ionicons name="thermometer-outline" size={35} color="#EE3936" style={{ padding: 20, left: "45%" }} />
                <Text style={{ color: "red", top: "-30%", left: "70%", }}>{temp}.0C</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mid}>
              </TouchableOpacity>
              <TouchableOpacity style={styles.set}>
                <Ionicons name="flash-sharp" size={25} color="#EE3936" style={{ padding: 25, left: "-30%" }} />
                <Text style={{ color: "red", top: "-30%" }}>{bat} %</Text>
              </TouchableOpacity></View>
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
            <View style={{ width: "50%", height: "10%", top: "-28%", left: "-5%", alignContent: "center", alignSelf: "center", transform: [{ rotate: "-90deg" }] }}>
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

          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default Home;
function switchState(arg0: boolean): [any] {
  throw new Error("Function not implemented.");
}