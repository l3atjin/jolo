import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import type { TextInputProps } from "react-native";
import { joloStyles } from "../../styles/constants";

const Input: React.FC<TextInputProps> = (props) => {
  return (
    <SafeAreaView>
      <TextInput style={styles.input} {...props} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 3,
    borderWidth: joloStyles.borderWidthThin,
    borderRadius: joloStyles.borderRadius,
    borderColor: joloStyles.primary,
    padding: 10,
  },
});

export default Input;
