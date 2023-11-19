import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SearchForm(): React.JSX.Element {
  const [date] = useState(new Date());
  return (
    <View style={styles.container}>
      <TextInput style={[styles.locInput]} placeholder="Departure" />
      <TextInput style={[styles.locInput]} placeholder="Destination" />
      <View style={styles.dateSeat}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={(event, selectedDate) => handleChange("date", selectedDate)}
        />
        <TextInput style={[styles.seat]} placeholder="Seats" />
      </View>

      <Button title="Search" onPress={() => {}} />
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
