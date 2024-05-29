import React from 'react';
import { View } from 'react-native';

import P11 from '../components/3/P11';
import P12 from '../components/3/P12';

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor : 'ECECEC' }}>
            <P11/>
            <P12/>
        </View>
    );
}