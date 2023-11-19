import React from "react";
import { View, Text } from "react-native";

export default function DriverPost({ postDetails }: any): JSX.Element {
  return (
    <View>
      <Text>{postDetails.author.full_name}</Text>
    </View>
  );
}
