import React from "react";
import { StyleSheet, TextInput } from "react-native";
import type { TextInputProps } from "react-native";
import { joloStyles } from "../../styles/constants";

const Input: React.FC<TextInputProps> = (props) => {
  return <TextInput {...props} style={[props.style, styles.input]} />;
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 4,
    borderWidth: joloStyles.borderWidthThin,
    borderRadius: joloStyles.borderRadius,
    borderColor: joloStyles.primary,
    padding: 12,
  },
});

export default Input;
