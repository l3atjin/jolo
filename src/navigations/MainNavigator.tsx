import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNavigator } from "./HomeNavigator";

const Stack = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="Post" component={HomeNavigator} />
      <Stack.Screen name="Inbox" component={HomeNavigator} />
      <Stack.Screen name="Chat" component={HomeNavigator} />
      <Stack.Screen name="Profile" component={HomeNavigator} />
      <Stack.Screen name="Trips" component={HomeNavigator} />
    </Stack.Navigator>
  );
}
