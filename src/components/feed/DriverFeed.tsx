import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, View } from "react-native";
import {
  fetchRiderPosts,
  type RiderPostsResponse,
} from "../../lib/api/rider_posts";
import RiderPost from "./RiderPost";
import SearchForm from "./SearchForm";
import { type SearchParams } from "./types";

export default function DriverFeed(): React.JSX.Element {
  const [posts, setPosts] = useState<RiderPostsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  // initial fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const riderPosts: RiderPostsResponse = await fetchRiderPosts();
      setPosts(riderPosts);
    };

    fetchPosts().catch((error) => {
      console.error(error);
    });
  }, []);

  async function submitSearch(searchParam: SearchParams): Promise<void> {
    setIsLoading(true);
    const newData: RiderPostsResponse = await fetchRiderPosts(searchParam);
    setPosts(newData);
    setIsLoading(false);
  }

  return (
    <View>
      <SearchForm onSubmitSearch={submitSearch} />
      <View>
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
                <RiderPost postDetails={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}
