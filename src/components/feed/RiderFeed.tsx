import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { fetchDriverPosts } from "../../lib/api/feed";
import DriverPost from "../DriverPost";
import SearchForm from "../SearchForm";

export type RequestResponse = Awaited<ReturnType<typeof fetchDriverPosts>>;

export default function RiderFeed(): JSX.Element {
  const [posts, setPosts] = useState<RequestResponse | null>(null);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      const riderPosts = await fetchDriverPosts();
      setPosts(riderPosts);
    };
    void fetchPosts();
    console.log(JSON.stringify(posts, null, 2));
  }, []);

  return (
    <View style={styles.container}>
      <Text>FEED</Text>
      <SearchForm />
      <FlatList
        data={posts}
        renderItem={({ item }) => <DriverPost postDetails={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
});
