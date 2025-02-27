import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { joloStyles } from "../../styles/constants";

import type { PressableProps } from "react-native";

interface Props extends PressableProps {
  text: string;
  onPress: () => void;
  type?: "primary" | "secondary";
}

/**
 * Jolo standard button, primary and secondary
 */
const Button: React.FC<Props> = (props) => {
  return (
    <Pressable
      {...props}
      style={[
        styles.button,
        props.type === "secondary" ? styles.secondary : styles.primary,
      ]}
    >
      <Text
        style={[
          styles.text,
          props.type === "secondary"
            ? styles.textSecondary
            : styles.textPrimary,
        ]}
      >
        {props.text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: joloStyles.borderRadius,
    elevation: 4,
    marginVertical: 4,
    borderWidth: joloStyles.borderWidth,
  },
  primary: {
    backgroundColor: joloStyles.primary,
  },
  secondary: {
    backgroundColor: joloStyles.background,
    borderColor: joloStyles.primary,
  },
  text: {
    fontSize: joloStyles.fontSize,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  textPrimary: {
    color: joloStyles.background,
  },
  textSecondary: {
    color: "black",
  },
});

export default Button;
