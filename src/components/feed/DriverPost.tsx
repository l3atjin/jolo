import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { DriverPostResponse } from "../../lib/api/driver_posts";
import Avatar from "../elements/Avatar";

interface PostProps {
  postDetails: DriverPostResponse;
}

export default function DriverPost({ postDetails }: PostProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.loc}>
          <Avatar uri={"https://reactnative.dev/img/tiny_logo.png"} />
          <View>
            <Text>{postDetails.author?.full_name}</Text>
            <Text>{postDetails.author?.phone_number}</Text>
          </View>
        </View>
        <Text>
          {postDetails.departure?.location_name} -{" "}
          {postDetails.destination?.location_name}
        </Text>
      </View>

      <View style={styles.row}>
        <View>
          <Text>Date: {postDetails.date}</Text>
          <Text>Car model: {postDetails.vehicle?.make_model}</Text>
          <Text>Car plate: {postDetails.vehicle?.plate}</Text>
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
    padding: 8,
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
