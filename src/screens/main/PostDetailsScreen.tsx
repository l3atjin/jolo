import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../../components/elements/Button";
import Container from "../../components/layout/Container";
import { supabase } from "../../lib/api";
import {
  insertDriverRequest,
  type DriverRequestInsert,
} from "../../lib/api/driver_posts";

export default function PostDetailsScreen({
  route,
  navigation,
}: any): React.JSX.Element {
  const postDetails = route.params;

  const onRequest = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const row: DriverRequestInsert = {
        post_id: postDetails.id,
        status: "REQUESTED",
        rider_id: user?.id,
      };
      await insertDriverRequest(row);
    } else {
      console.error("User not logged in.");
    }
  };

  return (
    <Container>
      <View>
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
        <Button text="Request" onPress={onRequest} type={"primary"} />
      </View>
    </Container>
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
