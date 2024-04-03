import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function H12() {
    return (
        <View style={{backgroundColor : '#3C3C3C', height : 150 }}>
            <FontAwesome name="arrow-left" size={30} color="white" style={{marginLeft : 10, marginTop : 10}} />
            <View style={{ flexDirection: "row", padding: 5}}>
                <Image style={{ width: 80, height: 80, marginLeft : 10, marginTop : 10}} source={require("../../assets/profile.jpg")} />
                <View style={{ paddingLeft: 20, marginTop : 15}}>
                    <Text style={{ fontSize: 20, color : 'white' }}>User</Text>
                    <View style={{ borderRadius: 5, backgroundColor : '#71BC98', marginTop : 10}}>
                        <Text style={{ fontSize : 20, color : 'white', marginHorizontal : 20, marginVertical : 5}}>profile setting</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}