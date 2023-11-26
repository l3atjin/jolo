import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import Button from "../../components/elements/Button";
import Container from "../../components/layout/Container";
import Input from "../../components/elements/TextInput";
import { supabase } from "../../lib/api";
import Logo from "../../components/elements/Logo";

export default function SignUpScreen(): React.JSX.Element {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const login = async (): Promise<void> => {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      phone,
      password,
      options: {
        // set user metadata
        data: {
          phone_number: phone,
          full_name: fullName,
        },
      },
    });

    if (error != null) {
      Alert.alert(error.message);
    }

    setLoading(false);
  };

  return (
    <Container style={styles.container}>
      <Logo size="md" style={styles.logo} />
      <Input
        placeholder="Утасны Дугаар"
        keyboardType="numeric"
        onChangeText={setPhone}
      />
      <Input placeholder="Нэр" onChangeText={setFullName} />
      <Input
        placeholder="Нууц Үг"
        secureTextEntry={true}
        textContentType="password"
        onChangeText={setPassword}
      />
      <Button
        text="Бүртгүүлэх"
        type="primary"
        onPress={login}
        disabled={loading}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: { alignSelf: "center" },
  container: { justifyContent: "center" },
});
