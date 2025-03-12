import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import TopHeader from "../utils/header";
import FontHelper from "../utils/FonthelperStyle";

const Feedback = (props:any) => {
  const username = props.navigation.state.params.data.props.props.navigation.state.params.data.username;
  const battery = props.navigation.state.params.data.battery;
  const trip_time = props.navigation.state.params.data.triptime;
  const speed = props.navigation.state.params.data.speed;
  const odometer = props.navigation.state.params.data.odo_mtr;
  const logout = async (props: any) => {
    await AsyncStorage.removeItem('@storage_Key')
    props.navigation.navigate("Login")
  }
  let data={
    'username':username
  }
  return (
    <View style={styles.body}>
      <View style={{flex:0.3}}>
        <TopHeader props={props.navigation.state.params.data.props}/>
      </View>
      <View>
        <Text style={[FontHelper.heading, { color: '#EE3936', fontSize: 35 }]}>Ride Details</Text>
      </View>
      <View style={styles.button1}>
        <Text style={[FontHelper.paragraph, { fontSize: 15, top: "15%", color: '#EE3936' }]}>
          Scooter Name : MIT001{'\n'}Total Kms Driven : {odometer}.00Km{'\n'}Total Stops : 5{'\n'}Total Hours in riding : {trip_time} sec{'\n'}Total Battery Consumed : {battery}%
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '25%' }}>
          <TouchableOpacity style={styles.press} onPress={() => logout(props)}>
            <Ionicons name="log-out-outline" size={35} color="#EE3936" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.press} onPress={() => props.navigation.navigate('home',{data})}>
            <Ionicons name="home" size={35} color="#EE3936" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Feedback;