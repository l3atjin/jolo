import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { type RiderPostResponse } from "../../lib/api/rider_posts";
import Avatar from "../elements/Avatar";

interface PostProps {
  postDetails: RiderPostResponse;
}

export default function RiderPost({
  postDetails,
}: PostProps): React.JSX.Element {
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
      <Text>{postDetails.details}</Text>
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
