import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../components/elements/Button";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type HomeNavigatorParamList = {
  Feed: undefined;
  Post: any;
};

type Props = NativeStackScreenProps<HomeNavigatorParamList, "Post">;

export default function PostDetailsScreen({ route, navigation }: Props) {
  const postDetails = route.params;
  return (
    <View style={styles.container}>
      <Text>POST DETAILS SCREEN</Text>
      <Button
        text="Go back"
        onPress={() => {
          navigation.goBack();
        }}
        type={"primary"}
      />
      <View style={styles.box}>
        <Text>Driver info:</Text>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text>{postDetails?.author.full_name}</Text>
        <Text>{postDetails?.author.phone_number}</Text>
      </View>

      <View style={styles.box}>
        <Text>Destination: {postDetails?.destination.location_name}</Text>
        <Text>Departure: {postDetails?.departure.location_name}</Text>
      </View>
      <Button text="Request" onPress={() => {}} type={"primary"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  box: {
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
  },
});
