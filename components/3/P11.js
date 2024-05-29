import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function H11() {
    return (
        <View style={{ flexDirection : 'row', backgroundColor : '#71BC98' , height : 100, justifyContent : 'space-between', padding : 20, alignItems : 'center'}}>
            <FontAwesome name="shopping-bag" size={30} color="white" />
            <View style={{ width: 50, height: 50, borderRadius: 10, backgroundColor : 'white'}}>
                <Text style={{ fontSize : 30, color : '#71BC98', marginHorizontal : 14, marginVertical : 2}}>Q</Text>
            </View>
            <FontAwesome name="bell" size={30} color="white" />
        </View>
    );
}