import React from "react";
import Button from "../../components/elements/Button";
import GooglePlacesInput from "../../components/elements/GooglePlacesInput";
import Container from "../../components/layout/Container";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { type MainStackParamList } from "../../navigations/MainNavigator";

interface ProfileScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, "Profile">;
}

export default function ProfileScreen({
  navigation,
}: ProfileScreenProps): React.JSX.Element {
  return (
    <Container>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        text="Go back"
      />
      <GooglePlacesInput />
    </Container>
  );
}
