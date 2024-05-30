import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function U11() {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor : '#3C3C3C', height : 150 }}>
            <View style={{ flexDirection: "row", padding: 25}}>
                <Image style={{ width: 80, height: 80, marginLeft : 10, marginTop : 10}} source={require("../../assets/profile.jpg")} />
                <View style={{ paddingLeft: 20, marginTop : 15}}>
                    <Text style={{ fontSize: 20, color : 'white' }}>User</Text>
                    <TouchableOpacity onPress={()=>{ navigation.navigate("User2");}}>
                        <View style={{ borderRadius: 5, backgroundColor : '#71BC98', marginTop : 10}}>
                            <Text style={{ fontSize : 20, color : 'white', marginHorizontal : 20, marginVertical : 5}}>profile setting</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}