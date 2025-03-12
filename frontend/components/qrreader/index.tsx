import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import styles from "./style";
import TopHeader from "../utils/header";
import Axios from 'axios';
import FontHelper from "../utils/FonthelperStyle";

const Home = (props: { navigation: any; }) => {
  const [CodedData, setText] = useState('');
  const code = {
    'data': CodedData
  }
  let propData={
    'props':props.navigation.state.params.propData.props
  }

  return (
    <View style={styles.body}>
      <View style={{flex:0.3}}>
        <TopHeader props={propData} />
      </View>
      <View style={{margin:'10%'}}>
        <Text style={[FontHelper.paragraph,{color:'#EE3936',fontSize:25,paddingBottom:'4%'}]}>Input the QR Code</Text>
        <TextInput
          onChangeText={newText => setText(newText)}
          defaultValue={CodedData}
          placeholder="QR Code" placeholderTextColor={'#EE3936'} style={styles.textBox} >
        </TextInput>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => {
            if (CodedData == "") {
              Alert.alert("Empty Input", "Please enter the User name to login")
            }
            else {
              Axios.post("http://3.110.89.195:4000/kickscooter/scanner", JSON.stringify(code))
                .then(function (res) {
                  if (res.data.data.status == 1) {
                    props.navigation.navigate("enddrive2", { propData })
                    setText('')
                  } else {
                    Alert.alert("Invalid QR code", "Please Enter your valid QRcode")
                  }
                });
            }
          }
          }>
            <Text style={[FontHelper.paragraph,{ fontSize: 18, color: "#EE3936" }]}>Validate QR Code</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;