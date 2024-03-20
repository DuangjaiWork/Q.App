import React from 'react';
import { Text, View } from 'react-native';

export default function R11() {
    return (
        <View style={{alignItems : 'center', padding : 10}}>
            <View style={{ width: 380, height: 30, borderRadius: 30, backgroundColor : '#AAAAAA'}}>
                <Text style={{ fontSize : 20, color : 'white', alignSelf : 'center'}}>Outside the service area / Unavailable</Text>
            </View>
        </View>
    );
}