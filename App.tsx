import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { type Session } from "@supabase/supabase-js";
import { supabase } from "./src/lib/api";
import { UserTypeProvider } from "./src/context/UserTypeProvider";

// top level navigators
import { AuthNavigator } from "./src/navigations/AuthNavigator";
import { MainNavigator } from "./src/navigations/MainNavigator";

export default function App(): React.JSX.Element {
  const [session, setSession] = useState<Session | null>(null);

  // Get supabase session data and update if necessary
  useEffect(() => {
    void supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <UserTypeProvider>
      <NavigationContainer>
        {session && session?.user ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </UserTypeProvider>
  );
}
