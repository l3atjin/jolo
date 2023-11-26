import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import type { DriverPostResponse } from "../lib/api/posts";

interface Props {
  post: DriverPostResponse;
}

const DriverPost: React.FC<Props> = ({ post }) => {
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
            <Text>{post.author?.full_name}</Text>
            <Text>{post.author?.phone_number}</Text>
          </View>
        </View>
        <Text>
          {post.departure?.location_name} - {post.destination?.location_name}
        </Text>
      </View>

      <View style={styles.row}>
        <View>
          <Text>Date: {post.date}</Text>
          <Text>Car model: {post.vehicle?.make_model}</Text>
          <Text>Car plate: {post.vehicle?.plate}</Text>
          <Text>Available seats: {post.seats}</Text>
        </View>
        <Text>Fee: {post.fee}</Text>
      </View>
    </View>
  );
};

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

export default DriverPost;
