import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Animated,
} from "react-native";
import {
  fetchDriverPosts,
  type DriverPostsResponse,
} from "../../lib/api/driver_posts";
import DriverPost from "./DriverPost";
import SearchForm from "./SearchForm";
import { type SearchParams } from "./types";

export interface PostDetails {
  id: string;
  date: string;
  time: string;
  details: string;
  fee: number;
  seats: number;
  author: Profile;
  departure: Location;
  destination: Location;
}

export interface Profile {
  full_name: string;
  avatar_url?: string;
  phone_number: string;
}

export interface Location {
  location_name: string;
}

export default function RiderFeed(): React.JSX.Element {
  const [posts, setPosts] = useState<DriverPostsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

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
    <View>
      <SearchForm onSubmitSearch={submitSearch} />
      <View style={styles.posts}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={posts}
            horizontal={true}
            pagingEnabled={true}
            scrollEnabled={true}
            snapToAlignment={"center"}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: pan.x } } }],
              {
                useNativeDriver: false,
              },
            )}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Post", item);
                }}
              >
                <DriverPost postDetails={item} />
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
  container: {},
  posts: {},
});
