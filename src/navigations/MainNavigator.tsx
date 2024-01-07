/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import HomeNavigator from "./HomeNavigator";
import TripScreen from "../screens/main/TripScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostScreen } from "../screens/main/CreatePostScreen";
import SwitchScreen from "../screens/main/SwitchScreen";
import InboxNavigator from "./InboxNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export type MainTabParamList = {
  Switch: undefined;
  Home: undefined;
  CreatePost: undefined;
  Trips: undefined;
  Inbox: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return <FontAwesome5 name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: "Create Post",
          tabBarIcon: ({ size, focused, color }) => {
            return <Ionicons name="add-circle-sharp" size={35} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Trips"
        component={TripScreen}
        options={{
          title: "My Trips",
          tabBarIcon: ({ size, focused, color }) => {
            return <FontAwesome5 name="car-side" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export type MainStackParamList = {
  Switch: undefined;
  Profile: undefined;
  Inbox: undefined;
  MainTab: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Inbox" component={InboxNavigator} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
}
