import React from "react";
import { StyleSheet } from "react-native";
import { Text, Button as PaperButton, Card } from "react-native-paper";

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
  onAccept: (bookingID: number) => void;
  onReject: (bookingID: number) => void;
}

const Request: React.FC<RequestProps> = (props) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text>Жолоочийн Нэр: {props.requestDetails.id}</Text>
        {/* Display other request details here */}
      </Card.Content>
      <Card.Actions style={styles.row}>
        <PaperButton
          onPress={() => {
            props.onAccept(props.requestDetails.id);
          }}
        >
          Зөвшөөрөх
        </PaperButton>
        <PaperButton
          onPress={() => {
            props.onReject(props.requestDetails.id);
          }}
        >
          Үгүй
        </PaperButton>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Request;
