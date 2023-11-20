import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./src/api";

// top level navigators
import { AuthNavigator } from "./src/navigations/AuthNavigator";
import { MainNavigator } from "./src/navigations/MainNavigator";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  // Get supabase session data and update if necessary
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      {session && session.user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
