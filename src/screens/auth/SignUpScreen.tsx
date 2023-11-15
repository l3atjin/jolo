import React, { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/elements/Button";
import { Container } from "../../components/layout/Container";
import Input from "../../components/elements/TextInput";
import { supabase } from "../../api";

export function SignUpScreen(): React.JSX.Element {
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
    <Container>
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
