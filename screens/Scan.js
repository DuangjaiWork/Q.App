import React from 'react';
import { ScrollView,  View, Text} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex : 1 , flexDirection : 'row', backgroundColor : 'white' , height : 100}}>
                <Text style={{ fontSize : 30, color : 'black', alignSelf : 'center', paddingLeft : 170}}>QR code</Text>
            </View>
            <Text style={{ fontSize : 30, color : 'gray', alignSelf : 'center', paddingTop : 280}}>Camera Access</Text>
        </ScrollView>
    );
}