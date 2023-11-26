import { FeedScreen } from "../screens/main/FeedScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostDetailsScreen from "../screens/main/PostDetailsScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Post" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}
