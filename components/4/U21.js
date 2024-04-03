import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function H12() {
    return (
        <View>
            <View style={{flexDirection : 'row'}}>
                <FontAwesome name="arrow-left" size={30} color="white" style={{marginLeft : 10, marginTop : 10}} />
                <Text style={{ fontSize: 20, color : 'white', marginLeft : 142, marginTop : 10}}>profile</Text>
            </View>
            <Image style={{ width: 90, height: 90, alignSelf: 'center', marginTop : 10}} source={require("../../assets/profile.jpg")} />
        </View>
    );
}