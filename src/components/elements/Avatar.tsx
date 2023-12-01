import React from "react";
import { View, Image } from "react-native";

interface AvatarProps {
  uri: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ uri, size = 50 }) => {
  return (
    <View style={{ borderRadius: size / 2, overflow: "hidden" }}>
      <Image style={{ width: size, height: size }} source={{ uri }} />
    </View>
  );
};

export default Avatar;
