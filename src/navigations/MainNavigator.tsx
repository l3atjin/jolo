/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import HomeNavigator from "./HomeNavigator";
import TripScreen from "../screens/main/TripScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import InboxScreen from "../screens/main/InboxScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostScreen } from "../screens/main/CreatePostScreen";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={HomeNavigator} />
    //   <Stack.Screen name="Post" component={PostDetailsScreen} />
    //   <Stack.Screen name="Inbox" component={InboxScreen} />
    //   <Stack.Screen name="Chat" component={ChatScreen} />
    //   <Stack.Screen name="Profile" component={ProfileScreen} />
    //   <Stack.Screen name="Trips" component={TripScreen} />
    // </Stack.Navigator>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="CreatePost" component={CreatePostScreen} />
      <Tab.Screen name="Trips" component={TripScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
