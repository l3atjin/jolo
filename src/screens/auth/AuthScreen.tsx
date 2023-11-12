import React from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../navigations/AuthNavigator";
type Props = NativeStackScreenProps<AuthStackParamList, "Auth">;

export function AuthScreen({ navigation }: Props) {
  return (
    <Container>
      <Button
        text="Нэвтрэх"
        type="primary"
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
