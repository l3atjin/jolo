import React, { useState } from "react";
import { View, Text } from "react-native";
import { supabase } from "../../lib/api";
import Dropdown from "../elements/Dropdown";
import Input from "../elements/TextInput";
import Button from "../elements/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  insertDriverPost,
  type DriverPostInsert,
} from "../../lib/api/driver_posts";

export default function DriverPostForm(): React.JSX.Element {
  const [formData, setFormData] = useState({
    date: new Date(),
    time: new Date(),
    details: "",
    departure_id: "",
    destination_id: "",
    fee: "",
    seats: "",
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
    const fee = Number(formData.fee);
    const seats = Number(formData.seats);

    const row: DriverPostInsert = {
      ...formData,
      date,
      time,
      user_id: user.id,
      vehicle_id: "cc72ab21-b9c2-4441-ad23-199f71b184c8",
      fee,
      seats,
    };

    await insertDriverPost(row);
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
        placeholder="Seats"
        value={formData.seats || ""}
        onChangeText={(text) => {
          setFormData((formData) => ({ ...formData, seats: text }));
        }}
      />

      <Input
        placeholder="Fee"
        value={formData.fee || ""}
        onChangeText={(text) => {
          setFormData((formData) => ({ ...formData, fee: text }));
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
