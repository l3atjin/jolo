import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FeedScreen } from "../screens/main/FeedScreen";
import { CreatePostScreen } from "../screens/main/CreatePostScreen";

const Tab = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
    </Tab.Navigator>
  );
}
