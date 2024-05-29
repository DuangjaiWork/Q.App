import React from 'react';
import { ScrollView,  View } from 'react-native';

import R11 from '../components/2/R11';
import R12 from '../components/2/R12';
import R13 from '../components/2/R13';
import R14 from '../components/2/R14';
import R15 from '../components/2/R15';

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20, backgroundColor : 'ECECEC' }}>
                <R11/>
                <R12/>
                <R13/>
                <R14/>
                <R15/>
            </View>
        </ScrollView>
    );
}