import { createContext, Dispatch, SetStateAction } from "react";

export enum AUTH_STAGE_ENUM {
  UNAUTHORIZED = "UNAUTHORIZED",
  AUTHORIZED = "AUTHORIZED",
  PENDING = "PENDING",
}

type AuthContextType = {
  authStage: AUTH_STAGE_ENUM;
  clientId: string;
  setClientId?: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>({
  authStage: AUTH_STAGE_ENUM.UNAUTHORIZED,
  clientId: "",
});
