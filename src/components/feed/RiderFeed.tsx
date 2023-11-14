import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import SearchForm from "../SearchForm";

export default function RiderFeed() {
  const [posts] = useState([]);
  return (
    <View>
      <SearchForm></SearchForm>
      <FlatList
        data={posts}
        renderItem={({ post }) => <Text>{post.id}</Text>}
        keyExtractor={(post) => post.id}
      />
    </View>
  );
}
