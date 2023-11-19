import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { fetchDriverPosts, type RequestResponse } from "../../lib/api/feed";
import DriverPost from "../DriverPost";
import SearchForm from "../SearchForm";
import { type SearchParams } from "./types";

export default function RiderFeed(): React.JSX.Element {
  const [posts, setPosts] = useState<RequestResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // initial fetch
  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      const riderPosts = await fetchDriverPosts();
      setPosts(riderPosts);
    };
    void fetchPosts();
    console.log(JSON.stringify(posts, null, 2));
  }, []);

  async function submitSearch(searchParam: SearchParams): Promise<void> {
    setIsLoading(true);
    const newData: RequestResponse = await fetchDriverPosts(searchParam);
    setPosts(newData);
    setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text>find a ride!</Text>
      <SearchForm onSubmitSearch={submitSearch} />
      <View style={styles.posts}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={posts}
            renderItem={({ item }) => <DriverPost postDetails={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    justifyContent: "center",
  },
  posts: {},
});
