import { View, Text, StyleSheet } from "react-native";

export function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text>Feed Screen</Text>
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
