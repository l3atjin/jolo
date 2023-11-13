import { FeedScreen } from "../screens/main/FeedScreen";
import { CreatePostScreen } from "../screens/main/CreatePostScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Post" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
