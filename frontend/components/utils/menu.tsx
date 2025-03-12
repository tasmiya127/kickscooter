import React, { useState} from "react";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import MatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import Ent from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import Faws from 'react-native-vector-icons/FontAwesome';
import Oct from 'react-native-vector-icons/Octicons';
import FontHelper from "./FonthelperStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

const logout = async (props:any) => {
  await AsyncStorage.removeItem('@storage_Key')
  props.navigation.navigate("Login")
}

const goHome = (props:any,data:any) => {
  props.navigation.navigate('home',{data})
}

const Ridehist = (props:any,data:any) => {
  
}

const Referal = (props:any,data:any) => {
  
}

const help = (props:any,data:any) => {
  
}

const buyScooter = (props:any,data:any) => {
  
}

const rentScooter = (props:any,data:any) => {

}

const mBook = (props:any, data:any) => {
  
}

const Menucomponent = (props: { props: { navigation: { state: { params: { data: { username: any; }; }; }; navigate: (arg0: string, arg1: { data: { username: any; }; } | undefined) => void; }; }; }) => {
  const [visible, setVisible] = useState(false);
  const username = props.props.navigation.state.params.data.username;
  let data = {
    'username': username
  }
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  return(
    <Menu style={{ width: "75%", backgroundColor: "#EE3936", flex:1 }}
    visible={visible}
    anchor={<TouchableOpacity style={{ marginRight: "6%" }} onPress={showMenu}> 
      <Ant name='menu-fold' size={30} style={styles.menuColorStyle} />
    </TouchableOpacity>}
    onRequestClose={hideMenu}>
    <MenuItem onPress={() => {
        hideMenu
        goHome(props.props,data)
      }}>
      <View style={styles.menuItemStyle}>
          <Text>Home &nbsp;</Text>
      </View>
      <View>
          <MatIcons name='home' size={30} />
      </View>
    </MenuItem>
    <MenuDivider />
    <MenuItem onPress={() => {
        hideMenu
        Ridehist(props.props,data)
      }}> 
    <View style={styles.menuItemStyle}>
      <View>
        <Text style={FontHelper.subHeading}>Ride History &nbsp;</Text>
      </View>
      <View style={styles.menuIconSpacing}>
        <MatIcons name='history' size={30}/>
      </View>
    </View>
    </MenuItem>
    <MenuDivider />
    <MenuItem onPress={() => {
        hideMenu
        Referal(props.props,data)
      }}>
      <View style={styles.menuItemStyle}>
        <View>
          <Text style={FontHelper.subHeading}>Referal &nbsp;</Text>
        </View>
        <View style={styles.menuIconSpacing}>
          <Faws name='slideshare' size={30} />
        </View>
      </View>
    </MenuItem>
    <MenuDivider />
    <MenuItem onPress={() => {
        hideMenu
        help(props.props,data)
      }}>
      <View style={styles.menuItemStyle}>
        <View>
          <Text style={FontHelper.subHeading}>Get Help &nbsp;</Text>
        </View>
        <View>
          <MatIcons name='help' size={30} />
        </View>
      </View>
    </MenuItem>
    <MenuDivider />
    <MenuItem onPress={() => {
        hideMenu
        buyScooter(props.props,data)
      }}>
      <View style={styles.menuItemStyle}>
        <View>
          <Text style={FontHelper.subHeading}>Buy Kickscooter &nbsp;</Text>
        </View>
        <View>
          <Ent name='shop' size={30} />
        </View>
      </View>
    </MenuItem>
    <MenuDivider />
    <MenuItem onPress={() => {
        hideMenu
        logout(props.props)
      }}>
      <View style={styles.menuItemStyle}>
        <View>
          <Text style={FontHelper.subHeading}>Logout &nbsp;</Text>
        </View>
        <View>
          <Ant name='logout' size={30} />
        </View>
      </View>
    </MenuItem>
  </Menu>
  )
}

const styles=StyleSheet.create({
  menuItemStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:'10%'
  },
  menuColorStyle:{
    color:'#EE3936'
  },
  menuIconSpacing:{
    paddingLeft:'65%'
  }
})

export default Menucomponent;