import React from 'react';
import { View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
            <View style={{flex : 1, flexDirection : 'column', justifyContent :'center'}}>
                <Text style={{ fontSize : 30, color : 'gray', alignSelf :'center'}}>Coming soon...</Text>
            </View>
    );
}