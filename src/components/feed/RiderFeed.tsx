import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Pressable,
} from "react-native";
import {
  fetchDriverPosts,
  type DriverPostsResponse,
} from "../../lib/api/posts";
import DriverPost from "../DriverPost";
import SearchForm from "./SearchForm";
import { type SearchParams } from "./types";

export default function RiderFeed(): React.JSX.Element {
  const [posts, setPosts] = useState<DriverPostsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  // initial fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const riderPosts = await fetchDriverPosts();
      setPosts(riderPosts);
    };

    fetchPosts().catch((error) => {
      console.error(error);
    });
  }, []);

  async function submitSearch(searchParam: SearchParams): Promise<void> {
    setIsLoading(true);
    const newData: DriverPostsResponse = await fetchDriverPosts(searchParam);
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
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Post", item);
                }}
              >
                <DriverPost post={item} />
              </Pressable>
            )}
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
