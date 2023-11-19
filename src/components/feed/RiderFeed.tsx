import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { fetchDriverPosts } from "../../lib/api/feed";
import DriverPost from "../DriverPost";
import SearchForm from "../SearchForm";

export type RequestResponse = Awaited<ReturnType<typeof fetchDriverPosts>>;

export default function RiderFeed(): React.JSX.Element {
  const [posts, setPosts] = useState<RequestResponse | null>(null);

  // initial fetch
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
      <Text>find a ride!</Text>
      <SearchForm />
      <View style={styles.posts}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <DriverPost postDetails={item} />}
          keyExtractor={(item) => item.id}
        />
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
