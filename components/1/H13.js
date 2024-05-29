import React from 'react';
import { Image, Text, View } from 'react-native';

export default function H13() {
    return (
        <View style={{ flexDirection : 'column' }}>
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 16/5 }} source={require("../../assets/ads.png")} />
            </View>
        </View>    
    );
}