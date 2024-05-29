import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function H12() {
    const navigation = useNavigation();
    return (
        <View style={{ padding : 10 }}>
            <View style={{ flexDirection: "row", padding: 5 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("User1"); }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 / 2 }} source={require("../../assets/profile.jpg")} />
                </TouchableOpacity>
                <View style={{ paddingLeft: 20, marginTop : 15}}>
                    <Text style={{ fontSize: 20 }}>Hello! User</Text>
                </View>
            </View>
        </View>
    );
}