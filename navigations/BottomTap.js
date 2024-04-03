import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Promo from '../screens/Promo';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#71BC98', tabBarInactiveTintColor: '#AAAAAA' }} >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="Scan"
            component={Scan}
            options={{
              tabBarLabel: "QR code",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="qrcode" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="Promo"
            component={Promo}
            options={{
              tabBarLabel: "Promotion",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="tag" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
        </Tab.Navigator>
      );    
}
