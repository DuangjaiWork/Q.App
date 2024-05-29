import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTap";
import Home from "../screens/Home";
import Restaurant from "../screens/Restaurant";
import User1 from "../screens/User1";
import User2 from "../screens/User2";
import Post from "../screens/Post";
import PostDetail from "../screens/PostDetail";
import PostForm from "../screens/PostForm";
import Location from "../screens/Location";
import ComingSoon from "../screens/ComingSoon";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
      <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
      <Stack.Screen name="PostDetail" component={PostDetail} options={{ headerShown: false }} />
      <Stack.Screen name="PostForm" component={PostForm} options={{ headerShown: false }} />
      <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
      <Stack.Screen name="ComingSoon" component={ComingSoon} />
      <Stack.Screen name="User1" component={User1} options={{ headerShown: false }}/>
      <Stack.Screen name="User2" component={User2} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
