import React from "react";
import Container from "../../components/layout/Container";
import { useUserType } from "../../context/UserTypeProvider";
import RiderTrips from "../../components/trips/RiderTrips";
import DriverTrips from "../../components/trips/DriverTrips";

export default function TripScreen(): React.JSX.Element {
  const [userType] = useUserType();

  return (
    <Container>
      {userType === "rider" ? <RiderTrips /> : <DriverTrips />}
    </Container>
  );
}
