import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Menucomponent from './menu';
import OwnerMenu from './ownerMenu';

const ownerMenuConfig = (props:any) => {
    let username = props.props.navigation.state.params.data.username;
    let data={
        'username':username
    }
    return (
        <View style={styles.logo}>
            <View style={styles.bar}>
                <View>
                    <OwnerMenu props={props.props} />
                </View>
                <Image source={require('../../assets/mevvsm.png')} />
                <TouchableOpacity onPress={() => props.props.navigation.navigate("profile", { data })}>
                    <Image style={styles.photo} source={require('../../assets/profile.png')} />
                </TouchableOpacity>
                <Ionicons name="notifications" size={30} color="#EE3936" onPress={() => props.props.navigation.navigate("notification", { data })} />
            </View>
            <View style={styles.line}></View>
        </View>
    )
}

const sharingMenuConfig = (props:any) => {
    let username = props.props.navigation.state.params.data.username;
    let data={
        'username':username
    }
    return (
        <View style={styles.logo}>
            <View style={styles.bar}>
                <View>
                    <Menucomponent props={props.props} />
                </View>
                <Image source={require('../../assets/mevvsm.png')} />
                <TouchableOpacity onPress={() => props.props.navigation.navigate("profile", { data })}>
                    <Image style={styles.photo} source={require('../../assets/profile.png')} />
                </TouchableOpacity>
                <Ionicons name="notifications" size={30} color="#EE3936" onPress={() => props.props.navigation.navigate("notification", { props })} />
            </View>
            <View style={styles.line}></View>
        </View>
    )
}
const TopHeader = (props:any) => {
    if(props.props.screen === 'owner'){
        return (ownerMenuConfig(props.props))
    }else{
        return (sharingMenuConfig(props.props))
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop:'10%',
        margin:'3%'
    },
    bar: {
        flexDirection: "row",
        justifyContent:'space-between'
    },
    line:
    {
        borderColor: "#EE3936",
        color: 'grey',
        backgroundColor: 'grey',
        height: 1,
        width: "100%",
        marginTop: 10
    },
    photo: {
        alignContent: "center",
        alignItems: "center",
        width: 35,
        height: 35
    },
})

export default TopHeader;