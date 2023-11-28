import React, { useEffect, useState } from "react";
// import { StyleSheet } from "react-native";
import DropDownPicker, { type ItemType } from "react-native-dropdown-picker";
// import { joloStyles } from "../../styles/constants";
import { fetchLocations } from "../../lib/api/locations";

interface Props {
  type: "locations" | "custom"; // | "vehicles" | "etc."
  items?: ItemType<string>;
  placeholder?: string;
  onValueChange?: (value: string) => void;
}

/**
 * Jolo standard dropdown that automatically
 * fetches backend IDs as values.
 */
const Dropdown: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<Array<ItemType<string>>>([]);

  // component mount loads values from backend
  useEffect(() => {
    const loadItems = async (): Promise<Array<ItemType<string>>> => {
      // for location type dropdown
      if (props.type === "locations") {
        const data = await fetchLocations();
        return data.map((loc) => ({
          value: loc.id,
          label: loc.location_name,
        }));
      }

      // others...
      return [];
    };

    // load items and initialize state
    loadItems()
      .then(setItems)
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }, []);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={props.placeholder}
      onChangeValue={(v: string | null) => {
        if (v && props.onValueChange) props.onValueChange(v);
      }}
    />
  );
};

// const styles = StyleSheet.create({});

export default Dropdown;
