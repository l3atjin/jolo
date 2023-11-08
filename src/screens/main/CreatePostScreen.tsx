import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <Text>Create Post</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
