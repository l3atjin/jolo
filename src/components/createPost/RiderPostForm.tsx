import React, { useState } from "react";
import { Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  insertRiderPost,
  type RiderPostInsert,
} from "../../lib/api/rider_posts";
import Button from "../elements/Button";
import Input from "../elements/TextInput";
import Dropdown from "../elements/Dropdown";
import { supabase } from "../../lib/api";

export default function RiderPostForm(): React.JSX.Element {
  const [formData, setFormData] = useState({
    date: new Date(),
    time: new Date(),
    details: "",
    departure_id: "",
    destination_id: "",
  });

  // handle post insert request Password2
  const handleSubmit = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error ?? !user) {
      throw new Error("Error while authenticating user");
    }

    const date = formData.date.toISOString().substring(0, 10);
    const hours = formData.time.getHours().toString().padStart(2, "0");
    const minutes = formData.time.getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;

    const row: RiderPostInsert = {
      ...formData,
      date,
      time,
      user_id: user.id,
    };

    console.log(JSON.stringify(row, null, 2));

    await insertRiderPost(row);
  };

  return (
    <View>
      <Text>Унаа хайж байна уу?</Text>
      <Dropdown
        type="locations"
        placeholder="Departure"
        onValueChange={(id: string) => {
          setFormData((formData) => ({ ...formData, departure_id: id }));
        }}
      />
      <Dropdown
        type="locations"
        placeholder="Destination"
        onValueChange={(id: string) => {
          setFormData((formData) => ({ ...formData, destination_id: id }));
        }}
      />
      <DateTimePicker
        value={new Date(formData.date)}
        mode="date"
        onChange={(event, selectedDate) => {
          selectedDate
            ? setFormData((formData) => ({ ...formData, date: selectedDate }))
            : setFormData((formData) => ({ ...formData, date: new Date() }));
        }}
      />

      <DateTimePicker
        testID="dateTimePicker"
        value={new Date(formData.time)}
        mode="time"
        onChange={(event, selectedTime) => {
          selectedTime
            ? setFormData((formData) => ({ ...formData, time: selectedTime }))
            : setFormData((formData) => ({ ...formData, time: new Date() }));
        }}
      />

      <Input
        placeholder="Details"
        value={formData.details || ""}
        onChangeText={(text) => {
          setFormData((formData) => ({ ...formData, details: text }));
        }}
      />

      <Button text="Submit" onPress={handleSubmit} />
    </View>
  );
}
