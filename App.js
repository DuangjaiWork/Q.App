import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './navigations/RootStack';
import BottomTap from './navigations/BottomTap';

export default function App() {
  return (
    // <User2 />
    // <User1 />
    <NavigationContainer>
      {/* <BottomTap />  */}
      <RootStack />
    </NavigationContainer>
    //<Home />
    //<Restaurant />
  );
}
