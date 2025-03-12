import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Axios from 'axios';
import TopHeader from '../utils/header';
import styles from "./style";


const QR = (props: { navigation: { state: { params: { data: { username: any; }; }; }; navigate: (arg0: string, arg1: { data?: { username: any; }; username?: any; }) => void; }; }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  let propData={
    'props':props
  }
  const username = props.navigation.state.params.data.username;

  const askForCameraPermission = async () => {
    let status = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status);
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const code = {
      'data': JSON.parse(data)
    }
    Axios.post("http://3.110.89.195:4000/kickscooter/scanner", JSON.stringify(code))
      .then(function (res) {
        if (res.data.data.status == 1) {
          props.navigation.navigate("enddrive", { propData })

        } else {
          Alert.alert("Invalid QR code", "Please Scan your valid QRcode")
        }
      });
    setText(code)

  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }
  
  // Return the View
  return (
    <View style={styles.container}>
      <View style={{flex:0.1}}>
        <TopHeader props={propData} />
      </View>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 530, width: "100%" }} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("qrreader", {propData})}>
        <Text style={{ color: "#EE3936", fontSize: 20, textAlign: "center", margin: "5%" }}>Cannot Scan the QR code?</Text>
      </TouchableOpacity>
    </View>
  );

}
export default QR;