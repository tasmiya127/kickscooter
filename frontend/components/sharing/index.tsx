import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import * as Location from 'expo-location';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import Empty from "../utils/empty";
import List from "../utils/list";
import TopHeader from "../utils/header";
import FontHelper from "../utils/FonthelperStyle";

const Sharing = (props: { navigation: any; }) => {
  const [responsedata, set_response] = useState([]);
  const [lat, setLat] = useState(Number);
  const [long, setLong] = useState(Number);
  const [Address, setAddress] = useState('');
  const username = props.navigation.state.params.data.name;
  const renderEmpty = () => <Empty text='No Devices Available' />
  const DisplayItem = (item: any) => {
    return <List {...item} />
  }

  useEffect(() => {
    const url = `http://3.110.89.195:4000/kickscooter/getImages`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json1 = await response.json()
        set_response(json1.result)
      } catch (error) {
        console.log(error)
      }
    }

    const getLocation = async () => {
      try {
        const granted = await Location.requestForegroundPermissionsAsync();
        if (granted) {
          let { coords } = await Location.getCurrentPositionAsync();
          const { latitude, longitude } = coords;
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
          });
          setLat(latitude);
          setLong(longitude);

          for (let item of response) {
            let address = `${item.city}`;
            setAddress(address);
          }
        }
        fetchData();
      } catch (error) {
        console.log(error)
      }
    };

    getLocation()
  }, [])

  let data = {
    'username': username,
    'lat': lat,
    'long': long,
    'props': props
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerComponent}>
        <TopHeader props={data} />
      </View>
      <View style={styles.dataComponent}>
        <View style={styles.LocationComponent}>
          <Text style={[styles.locationHeaderText, FontHelper.heading]}>Location &nbsp;</Text>
          <Ionicons name="location-outline" color="#00ff00" size={17} />
        </View>
        <View>
          <Text style={[styles.locationBodyComponent, FontHelper.paragraph]}>You are currently situated at : {Address} </Text>
        </View>
        <View>
          <Text style={[styles.heyText, FontHelper.subHeading]}>Hey {username} !</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("ridedetails", { data })}>
            <Text style={[FontHelper.heading, styles.buttonTextStyles]}>Rent a Scooter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listComponent}>
        <FlatList
          data={responsedata}
          ListEmptyComponent={renderEmpty}
          renderItem={DisplayItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default Sharing;