import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function H12() {
    const navigation = useNavigation();
    return (
        <View style={{marginTop : 300, alignItems : 'center'}}>
            <Text style={{ fontSize: 20, color : 'gray' }}>No booking</Text>
        </View>
    );
}