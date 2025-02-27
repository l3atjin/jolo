import React, {
  type Context,
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from "react";

type UserType = "rider" | "driver";
let UserTypeContext: Context<[UserType, Dispatch<SetStateAction<UserType>>]>;

// Define a provider component
export const UserTypeProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState("rider" as UserType); // Initial state

  // Define your context
  UserTypeContext = createContext([userType, setUserType]);

  return (
    <UserTypeContext.Provider value={[userType, setUserType]}>
      {children}
    </UserTypeContext.Provider>
  );
};

// Create a custom hook to use the UserTypeContext, this is optional but it simplifies the usage
export const useUserType = () => {
  const contextValue = useContext(UserTypeContext);
  return contextValue;
};
