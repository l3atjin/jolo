import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return <View style={styles.boxContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  boxContainer: {
    margin: 10,
  },
});
