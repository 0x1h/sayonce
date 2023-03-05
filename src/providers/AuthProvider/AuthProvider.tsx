import { AuthContext, AUTH_STAGE_ENUM } from "@/contexts/AuthContext";
import { useFetchUser } from "./hooks/useFetchUser";

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const {} = useFetchUser();

  return (
    <AuthContext.Provider
      value={{
        authStage: AUTH_STAGE_ENUM.UNAUTHORIZED,
        clientId: "",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
