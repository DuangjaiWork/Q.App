import React from 'react';
import { ScrollView,  View } from 'react-native';

import U11 from '../components/4/U11';
import U12 from '../components/4/U12';

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20, backgroundColor : 'ECECEC' }}>
            <U11/>
            <U12/>
            </View>
        </ScrollView>
    );
}