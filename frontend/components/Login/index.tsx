import React, {useState} from "react";
import { View, Text, TextInput,Dimensions,Modal,ScrollView, Image,TouchableOpacity, Alert } from "react-native";

import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {height, width} = Dimensions.get('window');



const login = (props: { navigation: { navigate: (arg0: string, arg1: { data: { name: string; }; }) => void; }; }) =>{
    const [name, setText] = useState('');
    const [pass, setPass] = useState('');
    const storeData = async (value: string) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
         console.log(e)
        }
    }
    let data={
        'name':name
    }

    return(
        <View style={styles.body}>
            
            <View>
                <View style={styles.logo}>
                    <Image style={styles.img} source={require('../../assets/mevv.jpeg')}/>
                </View>   
                <View style={styles.img1}>
                    <Image source={require('../../assets/design.png')} />
                </View>
            </View>
                <View style={styles.btnComponent}>
                    <View style={styles.lines}>
                        {/* <Image source={require('../../assets/line1.png')}/> */}
                    </View>
                <View style={styles.introComponent}>
                    <Text style={styles.intro}>Login
                    
                    {/* <Text style={styles.line}> </Text> */}
                    </Text>
                    <View style={styles.name}>
                    <View style={{margin:"2%"}}>
                    <Ionicons name="person" size={25} color="#EE3936" />
                    </View>
                        <TextInput
                              onChangeText={newText => setText(newText)}
                              defaultValue={name}
                             placeholder="Username" placeholderTextColor={'#EE3936'} style={{color:"#EE3936",fontFamily:"monster-semi",width:"70%"}} > 
                             
                             </TextInput>
                          
                        </View>
                    
                    <View style={styles.textBoxes}>
                        
                        
                        
                        <View style={styles.pass}>
                            <View style={{margin:"2%"}}>
                        <Ionicons name="lock-closed-outline" size={25} color="#EE3936"/>
                        </View>
                        <TextInput
                             
                             secureTextEntry={true}
                             onChangeText={newText => setPass(newText)}
                             defaultValue={pass} placeholder="Password" 
                             placeholderTextColor={'#EE3936'} style={{color:"#EE3936",fontFamily:"monster-semi",width:"50%"}} > 
                             
                             </TextInput>
                    
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            if(name == "" && pass == ""){
                                Alert.alert("Empty Input","Please enter the User name and Password to login")
                            }else if(name != "" && pass == ""){
                                Alert.alert("Empty Input","Please enter the Password to login")
                            }else if(name == "" && pass != ""){
                                Alert.alert("Empty Input","Please enter the Username to login")
                            }else{
                                let options = {
                                    "username":name,
                                    "pass":pass
                                };
                                Axios.post("http://3.110.89.195:4000/kickscooter/login",JSON.stringify(options))
                                .then(function(res){
                                    if(res.data.role == 0){
                                        props.navigation.navigate("home",{data})
                                        setText('');
                                        setPass('');
                                        storeData(res.data.token)
                                    }
                                    else if(res.data.role == 1)
                                    {
                                        props.navigation.navigate("motoclub",{data})
                                        setText('');
                                        setPass('');
                                        storeData(res.data.token)
                                    }
                                    else if(res.data.role == 2)
                                    {
                                        props.navigation.navigate("sharing",{data})
                                        setText('');
                                        setPass('');
                                        storeData(res.data.token)
                                    }
                                    else{   
                                        Alert.alert("Invalid Credentials","Please Check Username and Password")
                                    }
                                });
                            } 
                        }}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

export default login;