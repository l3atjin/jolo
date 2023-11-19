import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function DriverPost({ postDetails }: any): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.loc}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View>
            <Text>{postDetails.author.full_name}</Text>
            <Text>{postDetails.author.phone_number}</Text>
          </View>
        </View>
        <Text>
          {postDetails.departure.location_name} -{" "}
          {postDetails.destination.location_name}
        </Text>
      </View>

      <View style={styles.row}>
        <View>
          <Text>Date: {postDetails.date}</Text>
          <Text>Car model: Prius</Text>
          <Text>Available seats: {postDetails.seats}</Text>
        </View>
        <Text>Fee: {postDetails.fee}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  loc: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {},
  avatar: {
    width: 50,
    height: 50,
  },
});
