import React from "react";
import { Button } from "../../components/elements/Button";
import { Container } from "../../components/layout/Container";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../../navigations/AuthNavigator";
import { Logo } from "../../components/elements/Logo";
import { StyleSheet, View } from "react-native";
type Props = NativeStackScreenProps<AuthStackParamList, "Auth">;

export function AuthScreen({ navigation }: Props): React.JSX.Element {
  return (
    <Container style={styles.container}>
      <Logo size="lg" style={styles.logo} />
      <View style={styles.buttons}>
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
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
  logo: {
    marginTop: "auto",
    alignSelf: "center",
  },
  buttons: {
    marginTop: "auto",
  },
});
