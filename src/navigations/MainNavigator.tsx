/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { HomeNavigator } from "./HomeNavigator";
import TripScreen from "../screens/main/TripScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import InboxScreen from "../screens/main/InboxScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostScreen } from "../screens/main/CreatePostScreen";
import SwitchScreen from "../screens/main/SwitchScreen";

export type MainTabParamList = {
  Switch: undefined;
  Home: undefined;
  CreatePost: undefined;
  Trips: undefined;
  Inbox: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Switch"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Switch" component={SwitchScreen} />
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="CreatePost" component={CreatePostScreen} />
      <Tab.Screen name="Trips" component={TripScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
