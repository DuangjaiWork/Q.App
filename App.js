import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './navigations/RootStack';
import User1 from './screens/User1';
import User2 from './screens/User2';

export default function App() {
  return (
    // <User2 />
    <User1 />
    // <NavigationContainer>
    //   {/* <BottomTab />  */}
    //   <RootStack />
    // </NavigationContainer>
    //<Home />
    //<Restaurant />
  );
}
