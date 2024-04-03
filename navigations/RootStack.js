import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTap";
import H12 from "../components/1/H12";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="User" component={H12}/>
    </Stack.Navigator>
  );
}
