import React from "react";
import Container from "../../components/layout/Container";
import DriverPostDetails from "../../components/postDetails/DriverPostDetails";
import RiderPostDetails from "../../components/postDetails/RiderPostDetails";
import { useUserType } from "../../context/UserTypeProvider";

export default function PostDetailsScreen({
  route,
  navigation,
}: any): React.JSX.Element {
  const [userType] = useUserType();
  const postDetails = route.params;
  return (
    <Container>
      {userType === "driver" && <RiderPostDetails />}
      {userType === "rider" && (
        <DriverPostDetails postDetails={postDetails} navigation={navigation} />
      )}
    </Container>
  );
}
