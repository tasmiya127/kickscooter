import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Linking} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const List = (props:any) => {
    const openURL = (url:any) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }
    return(
        <View style={styles.container}>
           <Card mode='outlined' style={styles.cardstyle}>
                <Card.Title titleStyle={styles.textstyles} title={props.item.pname}/>
                <View style={styles.cardCoverStyle}>
                    <Card.Cover source={{uri: 'data:image/png;base64,' + props.item.image}} style={styles.cardImageStyles} />
                    <Card.Content>
                    <Title style={styles.textstyles}>Features</Title>
                    <View style={styles.paragraphStyles}>
                        <Ionicons name={props.item.features.feature1.icon_name} size={25} color="#CC0000"/>
                        <Paragraph style={styles.paragraphTextStyles}>{props.item.features.feature1.feature_Name}</Paragraph>
                    </View>
                    <View style={styles.paragraphStyles}>
                        <Ionicons name={props.item.features.feature2.icon_name} size={25} color="#CC0000"/>
                        <Paragraph style={styles.paragraphTextStyles}>{props.item.features.feature2.feature_Name}</Paragraph>
                    </View>
                    <View style={styles.paragraphStyles}>
                        <Ionicons name={props.item.features.feature3.icon_name} size={25} color="#CC0000"/>
                        <Paragraph style={styles.paragraphTextStyles}>{props.item.features.feature3.feature_Name}</Paragraph>
                    </View>
                    <View style={styles.paragraphStyles}>
                        <Ionicons name={props.item.features.feature4.icon_name} size={25} color="#CC0000"/>
                        <Paragraph style={styles.paragraphTextStyles}>{props.item.features.feature4.feature_Name}</Paragraph>
                    </View>
                    <View>
                        <Card.Actions>
                            <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.button} onPress={() => openURL('https://www.radboards.in/collections/all-products')}>
                                    <Text style={styles.buttonComponent}>Buy Now</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Actions>
                    </View>
                    </Card.Content>
                </View>
           </Card>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    paragraphStyles:{
        flexDirection:'row'
    },
    cardstyle:{
        width:'100%',
        backgroundColor:'#000000',
    },
    cardCoverStyle:{
        flexDirection:'row', 
        margin:'1%',
        height:'100%'
    },
    cardImageStyles:{
        padding:'1%',
        width:'50%', 
        justifyContent:'center',
        backgroundColor:'#CC0000',
        borderRadius:15,
    },
    textstyles:{
        color: '#CC0000',
        fontFamily: "monster-semi"
    },
    buttonComponent:{
        color:'#FFEEEE',
        textTransform:'uppercase',
        fontWeight:'500',
        padding:'2%'
    },
    button:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'#CC0000'
    },
    buttonView:{
        paddingLeft:'15%'
    },
    paragraphTextStyles:{
        fontFamily:'monster-med',
        fontSize:13,
        color:'#CC0000'
    }
})

export default List;