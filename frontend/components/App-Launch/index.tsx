import React from "react";
import { View, Text, Image, ScrollView,Button,Dimensions,TouchableOpacity } from "react-native";
import styles from "./style";
import Axios from 'axios';
const {height, width} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

const launch = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

    const getData = async (props:any) => {
        try {
            let value = null;
            value = await AsyncStorage.getItem('@storage_Key')
            if(value !== null) {
                validateToken(value,props);
            }else{
                props.navigation.navigate("Login");
            }
        } catch(e) {
            console.log(e);
        }
    }

    

    const validateToken = async(token:any,props:any) => {
        const header={
            "Authorization": `Bearer ${token}`
        }
        let url = "http://3.110.89.195:4000/kickscooter/validateToken"
        Axios({
            method:'post',
            url:url,
            headers:header
        }).then(res =>{
            let data={
                'name':res.data.name
            }
            if(res.data.role == 0){
                props.navigation.navigate("home",{data});
            }else if(res.data.role == 1){
                props.navigation.navigate("motoclub",{data});
            }else{
                props.navigation.navigate("sharing",{data});
            }
        }).catch(err =>{
            console.log(err);
            props.navigation.navigate("Login");
        })
    }

    return(
        <View style={styles.background}>
        
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.img}>
                <Image  style={styles.image} source={require('../../assets/design.png')}></Image> 
                <View style={styles.btnComponent}>
                <TouchableOpacity style={styles.button} onPress={() => getData(props)}>
                    <Text style={styles.buttonText}>Proceed</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default launch