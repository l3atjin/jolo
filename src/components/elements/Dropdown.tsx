import React, { useEffect, useState } from "react";
// import { StyleSheet } from "react-native";
import { Picker, type PickerProps } from "@react-native-picker/picker";
// import { joloStyles } from "../../styles/constants";
import { fetchLocations } from "../../lib/api/locations";

interface Props extends PickerProps<string> {
  type: "locations" | "custom"; // | "vehicles" | "etc."
  items?: string[];
}

/**
 * Jolo standard dropdown that automatically
 * fetches backend IDs as values.
 */
const Dropdown: React.FC<Props> = (props) => {
  const [items, setItems] = useState<string[]>([]);
  const [values, setValues] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState("");

  // component mount loads values from backend
  useEffect(() => {
    let loadedItems: string[] = [];
    let loadedValues: string[] = [];
    const loadItems = async () => {
      // for location type dropdown
      if (props.type === "locations") {
        const data = await fetchLocations();
        loadedItems = data.map((loc) => loc.location_name);
        loadedValues = data.map((loc) => loc.id);
      }

      // others...
    };

    // load items and initialize state
    loadItems()
      .then(() => {
        setItems(loadedItems);
        setValues(loadedValues);
        setSelectedValue(loadedValues[0]);

        // propagate first value to ancestor
        if (props.onValueChange) props.onValueChange(loadedValues[0], 0);
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }, []);

  // set picker value and call handler
  const onValueChange = (val: string, index: number) => {
    setSelectedValue(val);
    if (props.onValueChange) props.onValueChange(val, index);
  };

  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
      {items?.map((item, index) => (
        <Picker.Item key={index} value={values[index]} label={item} />
      ))}
    </Picker>
  );
};

// const styles = StyleSheet.create({});

export default Dropdown;
