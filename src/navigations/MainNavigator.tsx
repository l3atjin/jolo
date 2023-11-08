/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeNavigator } from "./HomeNavigator";
import TripScreen from "../screens/main/TripScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import ChatScreen from "../screens/main/ChatScreen";
import InboxScreen from "../screens/main/InboxScreen";
import PostDetailsScreen from "../screens/main/PostDetailsScreen";

const Stack = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="Post" component={PostDetailsScreen} />
      <Stack.Screen name="Inbox" component={InboxScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Trips" component={TripScreen} />
    </Stack.Navigator>
  );
}
