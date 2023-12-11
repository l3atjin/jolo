import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "../../components/layout/Container";
import Request from "../../components/trips/Request";
import { fetchRiderRequests } from "../../lib/api/trips";

export default function TripScreen(): React.JSX.Element {
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
    <Container>
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
    </Container>
  );
}
