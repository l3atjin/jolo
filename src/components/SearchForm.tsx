import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { type SearchFormProps } from "./feed/types";

export default function SearchForm({
  onSubmitSearch,
}: SearchFormProps): React.JSX.Element {
  const [searchParams, setSearchParams] = useState({
    departure: "",
    destination: "",
    date: new Date(),
    seats: 0,
    //  ...add more search parameters as needed
  });

  const handleChange = (name: string, value: string | Date | undefined) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSearch = () => {
    console.log("params are", JSON.stringify(searchParams, null, 2));
    onSubmitSearch(searchParams);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.locInput]}
        placeholder="Departure"
        onChangeText={(val) => {
          handleChange("departure", val);
        }}
      />
      <TextInput
        style={[styles.locInput]}
        placeholder="Destination"
        onChangeText={(val) => {
          handleChange("destination", val);
        }}
      />
      <View style={styles.dateSeat}>
        <DateTimePicker
          testID="dateTimePicker"
          value={searchParams.date}
          mode="date"
          onChange={(event, selectedDate) => {
            handleChange("date", selectedDate);
          }}
        />
        <TextInput
          style={[styles.seat]}
          placeholder="Seats"
          onChangeText={(val) => {
            handleChange("seats", val);
          }}
        />
      </View>

      <Button title="Search" onPress={onSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  locInput: {
    borderWidth: 2,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    width: "100%",
    height: "20%",
  },
  dateSeat: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 5,
    width: "100%",
  },
  date: {},
  seat: {},
});
