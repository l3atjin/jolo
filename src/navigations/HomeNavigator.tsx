import { FeedScreen } from "../screens/main/FeedScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostDetailsScreen from "../screens/main/PostDetailsScreen";
import { type DriverPostResponse } from "../lib/api/driver_posts";

export type HomeStackParamList = {
  Feed: undefined;
  Post: DriverPostResponse;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator(): React.JSX.Element {
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
