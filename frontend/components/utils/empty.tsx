import React from 'react';
import {View, Text} from 'react-native';

const Empty = (props:any) => {
    return(
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

export default Empty;