import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyCC4hcwVT1HNSIIZi9bkKDmAVQ4ToHBrzI",
        language: "mn",
      }}
    />
  );
};

export default GooglePlacesInput;
