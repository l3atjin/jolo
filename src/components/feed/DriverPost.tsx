import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { type PostDetails } from "./RiderFeed";

export default function DriverPost({ props }: PostDetails): JSX.Element {
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
            <Text>{props.author.full_name}</Text>
            <Text>{props.author.phone_number}</Text>
          </View>
        </View>
        <Text>
          {props.departure.location_name} - {props.destination.location_name}
        </Text>
      </View>

      <View style={styles.row}>
        <View>
          <Text>Date: {props.date}</Text>
          <Text>Car model: Prius</Text>
          <Text>Available seats: {props.seats}</Text>
        </View>
        <Text>Fee: {props.fee}</Text>
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
