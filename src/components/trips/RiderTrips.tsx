import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { joloStyles } from "../../styles/constants";
import { fetchRiderBookings } from "../../lib/api/bookings";

export default function RiderTrips(): React.JSX.Element {
  const [requests, setRequests] = useState();
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      const data = await fetchRiderBookings();
      setRequests(data);
      setIsLoading(false);
    };
    fetchRequests().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <View>
      {requests ? (
        <Text>Таньд одоогоор бүртгэлтэй унаа алга байна.</Text>
      ) : (
        <Text style={styles.header}>Баталгаажсан унаанууд</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: joloStyles.fontSize,
  },
});
