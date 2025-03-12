
import React, {useState} from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as Font from 'expo-font';

import { StyleSheet,Dimensions, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
const {height, width} = Dimensions.get('window');
const fetchFonts = () => {
  return Font.loadAsync({               // <- add return here
    "Digital": require("./assets/fonts/digital-7.ttf"),
    "monster-med": require("./assets/fonts/Montserrat-Medium.ttf"),
    "monster-reg": require("./assets/fonts/Montserrat-Regular.ttf"),
    "monster-semi": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

import launchscreen from "./components/App-Launch";
import Counter from "./components/Login";
import Home from "./components/home";
import Home2 from "./components/home2";
import Sharing from "./components/sharing";
import Profile from "./components/profile";
import end2 from "./components/enddrive2";
//import Ridedetails from "./components/ridedetails";
import Notification from "./components/notification";
import Feedback from "./components/feedback";
import QR2 from "./components/qrscanner2";
import QReader from "./components/qrreader";
import Drivescreen from "./components/drivescreen";
import Enddrive from "./components/enddrive";
import Motoclub from "./components/motoclub";
import MainScreen from './components/mapScreen/mainScreen';

const AppNavigator = createStackNavigator(
  {
      kickscooter:launchscreen,
      Login:Counter,
      notification:Notification,
      home:Home,
      enddrive2:end2,
      qrscanner2:QR2,
      enddrive:Enddrive,
      motoclub:Motoclub,
      qrreader:QReader,
      sharing:Sharing,
      profile:Profile,
      feedback:Feedback,
      ridedetails:MainScreen,
      drivescreen:Drivescreen,
      home2:Home2,
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:"#151F28",
      },
      headerTintColor:"#FFF",
      headerTitleAlign:"center",
      animationTypeForReplace:"push",
      headerShown:false,
      headerStatusBarHeight:20,
    },
  }
);

const Navigator = createAppContainer(AppNavigator);
export default function App() {
  const [fontsloaded, setIsDataLoaded] =useState(false);
  if (fontsloaded){
    return (
      <Navigator style={styles.container}>
      <Home2 navigation={{
          navigate: function (arg0: string): void {
            throw new Error('Function not implemented.');
          }
        }}/>
      <StatusBar barStyle="light-content" hidden={false} translucent={true}/>
    </Navigator>
    );
  }else{
      return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
