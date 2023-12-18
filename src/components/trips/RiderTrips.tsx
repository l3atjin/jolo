import { View, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchRiderRequests } from "../../lib/api/trips";
import Request from "../../components/trips/Request";

export default function RiderTrips(): React.JSX.Element {
  const [requests, setRequests] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      const data = await fetchRiderRequests();
      setRequests(data);
      setIsLoading(false);
    };
    fetchRequests().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={requests}
          renderItem={({ item }) => <Request requestDetails={item}></Request>}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
