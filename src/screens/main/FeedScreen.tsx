import { View, StyleSheet } from "react-native";
import React from "react";
import { useUserType } from "../../context/UserTypeProvider";
import DriverFeed from "../../components/feed/DriverFeed";
import RiderFeed from "../../components/feed/RiderFeed";

export function FeedScreen() {
  const [userType] = useUserType();
  return (
    <View style={styles.container}>
      {userType === "rider" ? (
        <RiderFeed></RiderFeed>
      ) : (
        <DriverFeed></DriverFeed>
      )}
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
