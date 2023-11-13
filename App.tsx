import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { UserTypeProvider } from "./src/context/UserTypeProvider";

// top level navigators
import { AuthNavigator } from "./src/navigations/AuthNavigator";
import { MainNavigator } from "./src/navigations/MainNavigator";

export default function App() {
  const isLoggedIn = true;
  return (
    <UserTypeProvider>
      <NavigationContainer>
        {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </UserTypeProvider>
  );
}
