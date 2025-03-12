import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';

const Home = (props: { navigation: { state: { params: { data: { name: any; }; }; }; navigate: (arg0: string, arg1: { data: { username: any; name: any; }; }) => void; }; }) => {
  const username = props.navigation.state.params.data.name;
  const name = props.navigation.state.params.data.name;
  let data={
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
            <Image style={styles.boardimg} source={require('../../assets/scooter5.png')} />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("motoclub", { data })}>
              <Text style={styles.buttonText}>Moto Club</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate("sharing", { data })}>
              <Text style={styles.buttonText1}>Sharing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Image style={styles.img3} source={require('../../assets/homevertical.png')} />
              <Text style={styles.buttonText2}>Kick Scooter</Text>
              <TouchableOpacity style={styles.hover}></TouchableOpacity>
              <TouchableOpacity style={styles.circle} onPress={() => props.navigation.navigate("home", {data})}></TouchableOpacity>
            </TouchableOpacity>
            <Text style={{ color: "#EE3936", fontFamily: "monster-semi", }}>More details below</Text>
            <TouchableOpacity style={styles.button3}>
              <Image style={styles.img2} source={require('../../assets/homeback.png')} />
              <Text style={styles.buttonText3}></Text>
              <TouchableOpacity style={styles.ad1}>
                <Image style={styles.ad1img} source={require('../../assets/mainscooter.png')} />
                <Text style={styles.ad1text}>Shockwave V1{'\n'}₹ 36,000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ad2}>
                <Image style={styles.ad2img} source={require('../../assets/scooter2.png')} />
                <Text style={styles.ad2text}>Shockwave{"\n"}V150{'\n'}₹ 36,000 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ad3}>
                <Image style={styles.ad1img} source={require('../../assets/mainscooter.png')} />
                <Text style={styles.ad3text}>Shockwave V1{'\n'}₹ 36,000</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.text1}>
              <Ionicons name="logo-facebook" size={25} color="#EE3936" style={{ padding: 25}} onPress={() => openURL('https://www.facebook.com/radboardsofficial/')} />
              <Ionicons name="logo-instagram" size={25} color="#EE3936" style={{ padding: 25 }} onPress={() =>openURL('https://www.instagram.com/radboardsofficial/')} />
              <Ionicons name="logo-whatsapp" size={25} color="#EE3936" style={{ padding: 25 }} />
              <Ionicons name="logo-twitter" size={25} color="#EE3936" style={{ padding: 25 }} onPress={() => openURL('https://twitter.com/boardsrad?lang=en')}/>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default Home;