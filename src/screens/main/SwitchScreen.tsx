import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "../../components/elements/Button";
import { Container } from "../../components/layout/Container";
import { useUserType } from "../../context/UserTypeProvider";
import { type MainTabParamList } from "../../navigations/MainNavigator";

type Props = NativeStackScreenProps<MainTabParamList, "Switch">;

export default function SwitchScreen({ navigation }: Props): React.JSX.Element {
  const [, setUserType] = useUserType();

  const onPressRider = () => {
    setUserType("rider");
    navigation.navigate("Home");
  };

  const onPressDriver = () => {
    console.log("CLICKED DRIVER");
    setUserType("driver");
    navigation.navigate("Home");
  };
  return (
    <Container>
      <Button onPress={onPressRider} text={"Унаа хайж байна уу?"} />
      <Button onPress={onPressDriver} text={"Зорчигч хайж байна уу?"} />
    </Container>
  );
}
