import { type ReactNode } from "react";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

interface Props {
  children: ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.boxContainer}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  boxContainer: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
});
