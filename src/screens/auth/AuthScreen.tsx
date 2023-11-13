import React from "react";
import { Button } from "../../components/elements/Button";
import { Container } from "../../components/layout/Container";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../navigations/AuthNavigator";
type Props = NativeStackScreenProps<AuthStackParamList, "Auth">;

export function AuthScreen({ navigation }: Props): React.JSX.Element {
  return (
    <Container>
      <Button
        text="Нэвтрэх"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        text="Бүртгүүлэх"
        type="secondary"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </Container>
  );
}
