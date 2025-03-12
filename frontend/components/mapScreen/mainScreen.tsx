import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';
import MapData from '../utils/mapView';
import FontHelper from '../utils/FonthelperStyle';
import TopHeader from '../utils/header';

const mainScreen = (props:any) => {
    const username = props.navigation.state.params.data.username;
    const name = props.navigation.state.params.data.name;
    const lat = props.navigation.state.params.data.lat;
    const long = props.navigation.state.params.data.long
    const [markers, setMarkers] = useState({
    title:'You are here',
    coordinates:{
      latitude:lat,
      longitude:long
    }
  })

    const [mapRegion, setMapregion] = useState({
        latitude:lat,
        longitude:long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    let data={
        'username':username,
        'region': mapRegion,
        'marker': markers,
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerComponent}>
                <TopHeader props={props.navigation.state.params.data} />
            </View>
            <View style={styles.mapComponent}>
                <MapData data={data}/>
            </View>
            <View style={styles.scrollComponent}>
                <View style={styles.simpleText}>
                    <Text style={[FontHelper.paragraph, styles.textStyles]}>Select the available scooters to dive</Text>
                </View>
                <ScrollView >
                    <Card style={styles.cardStyles}>
                        <Card.Title title="MIT001" titleStyle={[styles.cardTextStyles, FontHelper.heading]} />
                        <View style={styles.cardViewStyle}>
                            <View style={styles.cardImageViewStyles}>
                                <Card.Cover source={require('../../assets/scooter.png')} style={styles.cardImageStyles}/>
                            </View>
                            <View>
                                <Card.Content>
                                    <View style={styles.cardViewStyle}>
                                        <Paragraph style={[styles.cardParagraphStatusTextstyles,FontHelper.paragraph]}>Status:</Paragraph>
                                        <Paragraph style={[styles.cardParagraphTextstyles,FontHelper.paragraph]}>&nbsp;Active</Paragraph>
                                    </View>
                                </Card.Content>
                                <Card.Actions>
                                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("qrscanner2",{data})}>
                                        <Text style={[FontHelper.paragraph, styles.buttonText]}>Rent Now</Text>
                                    </TouchableOpacity>
                                </Card.Actions>
                            </View>
                        </View>
                    </Card>
                    <Card style={styles.cardStyles}>
                        <Card.Title title="MIT002" titleStyle={[styles.cardTextStyles, FontHelper.heading]} />
                        <View style={styles.cardViewStyle}>
                            <View style={styles.cardImageViewStyles}>
                                <Card.Cover source={require('../../assets/scooter.png')} style={styles.cardImageStyles}/>
                            </View>
                            <View>
                                <Card.Content>
                                    <View style={styles.cardViewStyle}>
                                        <Paragraph style={[styles.cardParagraphStatusTextstyles,FontHelper.paragraph]}>Status:</Paragraph>
                                        <Paragraph style={[styles.cardParagraphTextstyles,FontHelper.paragraph]}>&nbsp;Active</Paragraph>
                                    </View>
                                </Card.Content>
                                <Card.Actions>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={[FontHelper.paragraph, styles.buttonText]}>Rent Now</Text>
                                    </TouchableOpacity>
                                </Card.Actions>
                            </View>
                        </View>
                    </Card>
                    <Card style={styles.cardStyles}>
                        <Card.Title title="MIT003" titleStyle={[styles.cardTextStyles, FontHelper.heading]} />
                        <View style={styles.cardViewStyle}>
                            <View style={styles.cardImageViewStyles}>
                                <Card.Cover source={require('../../assets/scooter.png')} style={styles.cardImageStyles}/>
                            </View>
                            <View>
                                <Card.Content>
                                    <View style={styles.cardViewStyle}>
                                        <Paragraph style={[styles.cardParagraphStatusTextstyles,FontHelper.paragraph]}>Status:</Paragraph>
                                        <Paragraph style={[styles.cardParagraphTextstyles,FontHelper.paragraph]}>&nbsp;Active</Paragraph>
                                    </View>
                                </Card.Content>
                                <Card.Actions>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={[FontHelper.paragraph, styles.buttonText]}>Rent Now</Text>
                                    </TouchableOpacity>
                                </Card.Actions>
                            </View>
                        </View>
                    </Card>
                    <Card style={styles.cardStyles}>
                        <Card.Title title="MIT004" titleStyle={[styles.cardTextStyles, FontHelper.heading]} />
                        <View style={styles.cardViewStyle}>
                            <View style={styles.cardImageViewStyles}>
                                <Card.Cover source={require('../../assets/scooter.png')} style={styles.cardImageStyles}/>
                            </View>
                            <View>
                                <Card.Content>
                                    <View style={styles.cardViewStyle}>
                                        <Paragraph style={[styles.cardParagraphStatusTextstyles,FontHelper.paragraph]}>Status:</Paragraph>
                                        <Paragraph style={[styles.cardParagraphTextstylesInactive,FontHelper.paragraph]}>&nbsp;InActive</Paragraph>
                                    </View>
                                </Card.Content>
                                <Card.Actions>
                                    <TouchableOpacity style={styles.button} disabled={true}>
                                        <Text style={[FontHelper.paragraph, styles.buttonText]}>Rent Now</Text>
                                    </TouchableOpacity>
                                </Card.Actions>
                            </View>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000'
    },
    headerComponent:{
        flex:0.1
    },
    mapComponent:{
        flex:0.5
    },
    textStyles:{
        fontSize:19,
        color:'#CC0000',
        textAlign:'center'
    },
    scrollComponent:{
        flex:0.4
    },
    cardTextStyles:{
        color:'#CC0000',
        fontSize:25
    },
    cardParagraphTextstyles:{
        color:'#66FF33'
    },
    cardParagraphTextstylesInactive:{
        color:'#757575'
    },
    cardParagraphStatusTextstyles:{
        color:'#CC0000'
    },
    cardViewStyle:{
        flexDirection:'row'
    },
    cardStyles:{
        backgroundColor:'#000000',
        margin:'3%'
    },
    cardImageStyles:{
        backgroundColor:'#CC0000',
        borderRadius:15
    },
    cardImageViewStyles:{
        width:'50%',
    },
    button:{
        borderWidth:1,
        borderColor:'#CC0000',
        borderRadius:15
    },
    buttonText:{
        padding:'3%',
        color:'#CC0000'
    },
    simpleText:{
        paddingTop:'2%'
    }
})

export default mainScreen;