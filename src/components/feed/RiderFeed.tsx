import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { fetchDriverPosts, type RequestResponse } from "../../lib/api/feed";
import DriverPost from "./DriverPost";
import { Container } from "../layout/Container";
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
  const [posts, setPosts] = useState<RequestResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

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
    <Container>
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
                <DriverPost props={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  posts: {},
});
