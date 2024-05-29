import React from 'react';
import { View } from 'react-native';

import S11 from '../components/5/S11';
import S12 from '../components/5/S12';

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <S11/>
            <S12/>
        </View>
    );
}