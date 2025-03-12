import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking} from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';


const Home = (props: { navigation: { state: { params: { data: { name: any; }; }; }; navigate: (arg0: string, arg1: { data: { username: any; name: any; }; }) => void; }; }) => {
  const username = props.navigation.state.params.data.name;
  const name = props.navigation.state.params.data.name;
  let data = {
    'username':username,
    'name':username
  }
  const openURL = (url:any) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }
  return (
    <View style={styles.body}>
      <ScrollView>
        <View>
          <View style={styles.logo}>
            <Image style={styles.img} source={require('../../assets/logo.png')} />
            <View style={styles.boardview}>
              <Image source={require('../../assets/main4.png')} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("motoclub", { data })}>
              <Text style={styles.buttonText}>Moto Club</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText1} onPress={() => props.navigation.navigate("sharing", { data })}>Sharing</Text>
            </TouchableOpacity> */}
            <View style={styles.button2}>
              <Image style={styles.img3} source={require('../../assets/homevertical.png')} />
              <Text style={styles.buttonText2}>Hoverboard</Text>
              <TouchableOpacity style={styles.hover}></TouchableOpacity>
              <TouchableOpacity style={styles.circle} onPress={() => props.navigation.navigate("home2", { data })}></TouchableOpacity>
            </View>
            <Text style={{ color: "#EE3936", fontFamily: "monster-semi", }}>More details below</Text>
            <View style={styles.button3}>
              <Image style={styles.img2} source={require('../../assets/homeback.png')} />
              <Text style={styles.buttonText3}></Text>
              <TouchableOpacity style={[styles.ad1, styles.shadowProp]}>
                <View style={styles.rowstyles}>
                  <Image style={styles.ad1img} source={require('../../assets/board4.png')} />
                  <Text style={styles.ad1text}>Classic 6.5{'\n'}₹ 16,999</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ad2}>
                <View style={styles.rowstyles}>
                  <Image style={styles.ad2img} source={require('../../assets/board3.png')} />
                  <Text style={styles.ad2text}>RoverOff-Roader{"\n"}₹ 24,999</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ad3}>
                <View style={styles.rowstyles}>
                  <Image style={styles.ad3img} source={require('../../assets/board22.png')} />
                  <Text style={styles.ad3text}>  RoverOff-Roader{'\n'}  ₹ 24,999</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.text1}>
                <Ionicons name="logo-facebook" size={25} color="#EE3936" style={{ padding: 25 }} onPress={() => openURL('https://www.facebook.com/radboardsofficial/')}/>
                <Ionicons name="logo-instagram" size={25} color="#EE3936" style={{ padding: 25 }} onPress={() =>openURL('https://www.instagram.com/radboardsofficial/')} />
                <Ionicons name="logo-whatsapp" size={25} color="#EE3936" style={{ padding: 25 }}/>
                <Ionicons name="logo-twitter" size={25} color="#EE3936" style={{ padding: 25 }} onPress={() => openURL('https://twitter.com/boardsrad?lang=en')}/>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default Home;