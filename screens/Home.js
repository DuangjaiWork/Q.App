import React from 'react';
import { ScrollView,  View } from 'react-native';

import H11 from '../components/1/H11';
import H12 from '../components/1/H12';
import H13 from '../components/1/H13';
import H14 from '../components/1/H14';
import H15 from '../components/1/H15';

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
            <H11/>
            <H12/>  
            <H13/>
            <H14/>
            <H15/>
            </View>
        </ScrollView>
    );
}