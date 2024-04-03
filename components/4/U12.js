import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function H12() {
    return (
        <View style={{backgroundColor : '#FFFFFF',marginTop : 250, alignItems : 'center'}}>
            <Text style={{ fontSize: 20, color : 'gray' }}>No booking</Text>
                <View style={{ borderRadius: 5, backgroundColor : '#71BC98', marginTop : 10}}>
                    <Text style={{ fontSize : 20, color : 'white', marginHorizontal : 20, marginVertical : 5}}>Go to Home</Text>
                </View>
        </View>
    );
}