import { AuthContext } from "@/contexts/AuthContext";
import type { Session } from "next-auth";
import { isAuth } from "./utils/isAuth";
import { api } from "@/utils/api";
import { useEffect } from "react";

type AuthProviderProps = {
  session?: Session;
};

export const AuthProvider = ({
  children,
  session,
}: React.PropsWithChildren<AuthProviderProps>) => {
  const authUser = api.authUser.useMutation();

  useEffect(() => {
    if (!session) return;

    authUser.mutate({
      avatar: session.user.image as string,
      client_id: session.user.id,
      username: session.user.name as string,
    });
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        authStage: isAuth(session),
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
