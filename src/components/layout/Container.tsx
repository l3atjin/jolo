import { type ReactNode } from "react";
import React from "react";
import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Container: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.boxContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[{ flex: 1 }, props.style]}
      >
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    padding: 30,
    flexDirection: "column",
    flex: 1,
  },
});
