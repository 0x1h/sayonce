import { AuthContext } from "@/contexts/AuthContext";
import type { Session } from "next-auth";
import { isAuth } from "./utils/isAuth";

type AuthProviderProps = {
  session?: Session;
};

export const AuthProvider = ({
  children,
  session,
}: React.PropsWithChildren<AuthProviderProps>) => {  
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
