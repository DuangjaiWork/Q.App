import React from 'react';
import { Image, Text, View } from 'react-native';

export default function H12() {
    return (
        <View>
            <View style={{flexDirection : 'row'}}>
                <Text style={{ fontSize: 20, color : 'white', marginTop : 10, marginLeft: 177}}>profile</Text>
            </View>
            <Image style={{ width: 90, height: 90, alignSelf: 'center', marginTop : 10}} source={require("../../assets/profile.jpg")} />
        </View>
    );
}