import { FeedScreen } from "../screens/main/FeedScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostDetailsScreen from "../screens/main/PostDetailsScreen";

export type HomeStackParamList = {
  Feed: undefined;
  Post: any;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeNavigator(): React.JSX.Element {
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
