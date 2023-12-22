import React from "react";
import ChatScreen from "../screens/main/ChatScreen";
import InboxScreen from "../screens/main/InboxScreen";
import RequestsScreen from "../screens/main/RequestsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Container from "../components/layout/Container";

export type InboxStackParamList = {
  InboxTopTab: undefined;
  Chat: any;
};

export type InboxTabParamList = {
  Inbox: undefined;
  Requests: undefined;
};

const Stack = createNativeStackNavigator<InboxStackParamList>();

const TopTab = createMaterialTopTabNavigator<InboxTabParamList>();

const InboxTopTabNavigator = (): React.JSX.Element => {
  return (
    <Container>
      <TopTab.Navigator>
        <TopTab.Screen name="Inbox" component={InboxScreen} />
        <TopTab.Screen name="Requests" component={RequestsScreen} />
      </TopTab.Navigator>
    </Container>
  );
};

export default function InboxNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="InboxTopTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InboxTopTab" component={InboxTopTabNavigator} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
