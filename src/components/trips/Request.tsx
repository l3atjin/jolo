import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from "../elements/Button";

interface RequestProps {
  requestDetails: {
    post_details: {
      user_id: string;
    };
    driver_info: {
      full_name: string;
      avatar_url: string;
      phone_number: string;
    };
  };
}

const Request: React.FC<RequestProps> = (props) => {
  const handleAccept = () => {
    // Implement your logic for accepting the request
    console.log("Request accepted:", props.requestDetails);
  };

  const handleReject = () => {
    // Implement your logic for rejecting the request
    console.log("Request rejected:", props.requestDetails);
  };

  return (
    <View style={styles.container}>
      <Text>Driver name: {props.requestDetails.driver_info.full_name}</Text>
      {/* Display other request details here */}
      <Button text="Accept" onPress={handleAccept} />
      <Button text="Reject" onPress={handleReject} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Request;
