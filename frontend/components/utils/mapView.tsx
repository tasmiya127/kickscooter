import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, { Marker } from "react-native-maps";

const MapData = (props:any) => {
    return(
        <View style={styles.container}>
            <MapView style={styles.map} showsBuildings={true} region={props.data.region} showsCompass={true} showsUserLocation={true}>
                <Marker coordinate={props.data.marker.coordinates} title={props.data.marker.title} />
            </MapView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:'100%'
    },
    map:{
        flex:1
    }
})

export default MapData;