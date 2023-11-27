import React from "react";
import { useUserType } from "../../context/UserTypeProvider";
import DriverFeed from "../../components/feed/DriverFeed";
import RiderFeed from "../../components/feed/RiderFeed";
import { Container } from "../../components/layout/Container";

export function FeedScreen(): React.JSX.Element {
  const [userType] = useUserType();
  return (
    <Container>
      {userType === "rider" ? (
        <RiderFeed></RiderFeed>
      ) : (
        <DriverFeed></DriverFeed>
      )}
    </Container>
  );
}
