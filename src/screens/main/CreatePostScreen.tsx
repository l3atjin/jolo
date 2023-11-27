import React from "react";
import { useUserType } from "../../context/UserTypeProvider";
import RiderPostForm from "../../components/createPost/RiderPostForm";
import DriverPostForm from "../../components/createPost/DriverPostForm";
import Container from "../../components/layout/Container";

export function CreatePostScreen(): React.JSX.Element {
  const [userType] = useUserType();

  return (
    <Container>
      {userType === "rider" && <RiderPostForm />}
      {userType === "driver" && <DriverPostForm />}
    </Container>
  );
}
