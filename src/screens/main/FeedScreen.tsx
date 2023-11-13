import { View, StyleSheet } from "react-native";
import React from "react";
import SearchBar from "../../components/SearchBar";

export function FeedScreen() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
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
