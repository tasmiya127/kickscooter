import React from "react";
import { View, Text,Image,TouchableOpacity, ScrollView, Linking} from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import FontHelper from "../utils/FonthelperStyle";

const Home = (props: { navigation: { state: { params: { data: { username: any; name: any; }; }; }; navigate: (arg0: string, arg1: { data: { username: any; }; }) => void; }; }) => {
    const username =props.navigation.state.params.data.username;
    const name = props.navigation.state.params.data.name;
    let data = {
        'username':username
    }
    const openURL = (url:any) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
      }
    return (
        <View style={styles.body}>
            <View style={styles.triangle}>
            </View>
            <View style={styles.logo}>
                <View style={styles.bar}>
                    <View>
                        <Image style={styles.img} source={require('../../assets/mevvsm.png')} />
                    </View>
                    <View>
                        <Ionicons name="notifications" size={30} color="#000000" onPress={() => props.navigation.navigate("notification",{data})} />
                    </View>
                </View>
                <Image style={styles.photo} source={require('../../assets/photo.png')} />
                <Text style={[FontHelper.subHeading,{ fontSize: 15, marginTop: "5%" }]}>{username}</Text>
            </View>
            <View style={styles.buttonTopView}>
            <ScrollView>
                <TouchableOpacity style={styles.button1}>
                    <Text style={[FontHelper.paragraph,{fontSize:20,color:"#EE3936"}]}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={[FontHelper.paragraph,{fontSize:20,color:"#EE3936"}]}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => openURL('https://linktr.ee/radboardsusermanual')}>
                    <Text style={[FontHelper.paragraph,{fontSize:20,color:"#EE3936"}]}>User Manuals</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => openURL('https://www.radboards.in/')}>
                    <Text style={[FontHelper.paragraph,{fontSize:20,color:"#EE3936"}]}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => openURL('https://www.radboards.in/pages/contact-us')}>
                    <Text style={[FontHelper.paragraph,{fontSize:20,color:"#EE3936"}]}>Support</Text>
                </TouchableOpacity> 
            </ScrollView>
            </View>
        </View>

    )
}

export default Home;