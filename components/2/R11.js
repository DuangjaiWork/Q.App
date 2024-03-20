import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function R11() {
    return (
        <View style={{ flex : 1 , flexDirection : 'row', backgroundColor : '#71BC98' , height : 100, justifyContent : 'space-between', padding : 20, alignItems : 'center'}}>
            <FontAwesome name="arrow-left" size={30} color="white"/>
            <View>
                <Text style={{ fontSize : 30, color : 'white', marginHorizontal : 14, marginVertical : 2}}>Restaurant</Text>
            </View>
            <FontAwesome name="home" size={30} color="white" />
        </View>
    );
}