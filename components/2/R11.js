import React from 'react';
import { Text, View } from 'react-native';

export default function R11() {
    return (
        <View style={{ flex : 1 , flexDirection : 'row', backgroundColor : '#71BC98' , height : 100, justifyContent : 'center', padding : 20, alignItems : 'center'}}>
            <View>
                <Text style={{ fontSize : 30, color : 'white', marginHorizontal : 14, marginVertical : 2}}>Restaurant</Text>
            </View>
        </View>
    );
}