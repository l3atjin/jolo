import { NavigationContainer } from "@react-navigation/native";
import React from "react";

// top level navigators
import { AuthNavigator } from "./src/navigations/AuthNavigator";
import { MainNavigator } from "./src/navigations/MainNavigator";

export default function App() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
