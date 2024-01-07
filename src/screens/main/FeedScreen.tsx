import React from "react";
import { useUserType } from "../../context/UserTypeProvider";
import DriverFeed from "../../components/feed/DriverFeed";
import RiderFeed from "../../components/feed/RiderFeed";
import Container from "../../components/layout/Container";
import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function FeedScreen(): React.JSX.Element {
  const [userType] = useUserType();
  const navigation = useNavigation();

  const onProfileClick = () => {
    navigation.navigate("Profile", {});
  };
  const onInboxClick = () => {
    navigation.navigate("Inbox", {});
  };
  const Header = () => {
    return (
      <View style={styles.header}>
        <Pressable onPress={onProfileClick}>
          <Ionicons name="person-circle-sharp" size={35} color="black" />
        </Pressable>
        <Pressable onPress={onInboxClick}>
          <AntDesign name="message1" size={30} color="black" />
        </Pressable>
      </View>
    );
  };
  return (
    <Container>
      <Header />
      {userType === "rider" ? (
        <RiderFeed></RiderFeed>
      ) : (
        <DriverFeed></DriverFeed>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
