import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import TopHeader from "../utils/header";


const Home = (props: { navigation: any; }) => {
  const username = props.navigation.state.params.data.username;
  let data = {
    'username': username,
    'screen':'owner',
    'props':props
  }
  return (

    <View style={styles.body}>
        <View>
          <View>
            <TopHeader props={data} />
          </View>
          <View style={styles.logo}>
            <Image style={styles.boardimg} source={require('../../assets/hover.png')} />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.blue} onPress={() => props.navigation.navigate("drivescreen", { data })}>
                <Ionicons name="bluetooth-outline" size={20} color="#EE3936" style={{ padding: 18 }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.set}>
                <Ionicons name="settings-outline" size={20} color="#EE3936" style={{ padding: 18 }} />
              </TouchableOpacity>
            </View>
            <Text style={{ color: "#EE3936", fontSize: 30, fontFamily: 'monster-med', }}>News</Text>
            <TouchableOpacity style={styles.ad1}>
              <View style={styles.rowstyles}>
                <Image style={styles.ad1img} source={require('../../assets/hover.png')} />
                <Text style={styles.ad1text}>Buy brand{'\n'} new hoverboard {'\n'}@ {'\u20B9'} 16999</Text>
                <Text style={styles.text}>Visit for more details</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.ad1}>
              <View style={styles.rowstyles}>
                <Image style={styles.ad1img} source={require('../../assets/hover.png')} />
                <Text style={styles.ad1text}>Clasic 6.5"{'\n'} with speed upto{'\n'} 45Kmph</Text>
                <Text style={styles.text}>Visit for more details</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>

  )
}

export default Home;