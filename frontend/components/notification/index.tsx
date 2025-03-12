import React from "react";
import { View, Text} from "react-native";
import styles from "./style";
import TopHeader from "../utils/header";

const Home = (props: { navigation: any; }) => {
  return (
    <View style={styles.body}>
        <View style={{flex:0.1, paddingBottom:'3%'}}>
          <TopHeader props={props.navigation.state.params.props} />
        </View>
        <View style={{flex:0.8, margin:'3%'}}>
          <Text style={{ fontSize: 25, color: "red" }}>Notifications</Text>
          <Text style={{ fontSize: 20, color: "grey" }}>No notifications available!</Text>
        </View>
    </View>
  )
}

export default Home;