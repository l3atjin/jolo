import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../elements/TextInput";
import Button from "../elements/Button";
import { type SearchFormProps } from "./types";

export default function SearchForm({
  onSubmitSearch,
}: SearchFormProps): React.JSX.Element {
  const [searchParams, setSearchParams] = useState({
    departure: "",
    destination: "",
    date: new Date(),
    seats: 0,
  });

  const handleChange = (name: string, value: string | Date | undefined) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSearch = () => {
    onSubmitSearch(searchParams);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Хаанаас"
        onChangeText={(val) => {
          handleChange("departure", val);
        }}
      />
      <Input
        placeholder="Хаашаа"
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
        <Input
          placeholder="Хэдүүлээ"
          onChangeText={(val) => {
            handleChange("seats", val);
          }}
        />
      </View>

      <Button text="Хайх" type="primary" onPress={onSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  dateSeat: {
    flexDirection: "row",
  },
  date: {},
  seat: {},
});
