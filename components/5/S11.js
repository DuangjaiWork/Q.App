import React from 'react';
import { View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
            <View style={{ flexDirection : 'row', backgroundColor : 'white' , height : 100}}>
                <Text style={{ fontSize : 30, color : 'black', alignSelf : 'center', paddingLeft : 170}}>QR code</Text>
            </View>
    );
}