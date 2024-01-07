import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Request from "../../components/trips/Request";
import {
  acceptRequest,
  fetchRiderRequests,
  rejectRequest,
  type BookingsRequestResponse,
} from "../../lib/api/bookings";

export default function RequestsScreen(): React.JSX.Element {
  const [requests, setRequests] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      const data: BookingsRequestResponse = await fetchRiderRequests();
      setRequests(data);
      setIsLoading(false);
    };
    fetchRequests().catch((error) => {
      console.error(error);
    });
  }, [isChanged]);

  const handleAccept = async (bookingID: number) => {
    await acceptRequest(bookingID);
    setIsChanged((prevCheck) => !prevCheck);
    console.log("Clicked accept");
  };

  const handleReject = async (bookingID: number) => {
    console.log("Clicked reject");
    await rejectRequest(bookingID);
    setIsChanged((prevCheck) => !prevCheck);
  };

  return (
    <View>
      <Text>Таньд ирсэн хүсэлтүүд</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={requests}
          renderItem={({ item }) => (
            <Request
              requestDetails={item}
              onAccept={handleAccept}
              onReject={handleReject}
            ></Request>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
