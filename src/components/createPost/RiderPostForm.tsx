import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../elements/Button";
import Input from "../elements/TextInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import { insertRiderPost } from "../../lib/api/createPost";

export interface RiderPostform {
  date: Date;
  time: Date;
  details: string;
  seats: number;
  departure: string;
  destination: string;
}

export default function RiderPostForm(): React.JSX.Element {
  const [formData, setFormData] = useState<RiderPostform>({
    date: new Date(),
    time: new Date(),
    details: "",
    seats: 0,
    departure: "", // Replace with actual Location type
    destination: "", // Replace with actual Location type
  });
  const handleSubmit = async () => {
    // Handle submission specifically for Rider
    await insertRiderPost(formData);
  };

  return (
    <View>
      <Text>Унаа хайж байна уу?</Text>
      <Input
        placeholder="Departure"
        value={formData.departure.toString()}
        onChangeText={(text) => {
          setFormData({ ...formData, departure: text });
        }}
      />
      <Input
        placeholder="Destination"
        value={formData.destination.toString()}
        onChangeText={(text) => {
          setFormData({ ...formData, destination: text });
        }}
      />
      <DateTimePicker
        testID="dateTimePicker"
        value={formData.date}
        mode="date"
        onChange={(event, selectedDate) => {
          selectedDate
            ? setFormData({ ...formData, date: selectedDate })
            : setFormData({ ...formData, date: new Date() });
        }}
      />

      <DateTimePicker
        testID="dateTimePicker"
        value={formData.date}
        mode="time"
        onChange={(event, selectedTime) => {
          selectedTime
            ? setFormData({ ...formData, time: selectedTime })
            : setFormData({ ...formData, time: new Date() });
        }}
      />

      <Input
        placeholder="Seats"
        value={formData.seats.toString()}
        onChangeText={(text) => {
          setFormData({ ...formData, seats: parseInt(text) });
        }}
        keyboardType="numeric"
      />
      <Input
        placeholder="Details"
        value={formData.details}
        onChangeText={(text) => {
          setFormData({ ...formData, details: text });
        }}
      />

      {/* Additional inputs for departure and destination locations */}

      <Button text="Submit" onPress={handleSubmit} />
    </View>
  );
}
