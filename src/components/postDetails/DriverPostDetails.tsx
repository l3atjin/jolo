import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../../components/elements/Button";
import { supabase } from "../../lib/api";
import { type BookingInsert, insertBooking } from "../../lib/api/bookings";
import { type DriverPostResponse } from "../../lib/api/driver_posts";

interface DriverPostDetailsProps {
  postDetails: DriverPostResponse;
  navigation: any;
}

export default function DriverPostDetails({
  postDetails,
  navigation,
}: DriverPostDetailsProps): React.JSX.Element {
  const onRequest = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const row: BookingInsert = {
        driver_post_id: postDetails.id,
        status: "REQUESTED",
        rider_id: user?.id,
      };
      await insertBooking(row);
    } else {
      console.error("User not logged in.");
    }
  };

  return (
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
