import React from "react";
import { Image, StyleSheet } from "react-native";
import type { ImageProps } from "react-native";

interface Props extends Partial<ImageProps> {
  size: "sm" | "md" | "lg";
}

const Logo: React.FC<Props> = (props) => {
  const { size } = props;
  return (
    <Image
      {...props}
      style={[props.style, styles[size]]}
      source={require("../../assets/logo.png")}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  sm: { width: 50, height: 50, margin: 10 },
  md: { width: 100, height: 100, margin: 20 },
  lg: { width: 200, height: 200, margin: 40 },
});

export default Logo;
