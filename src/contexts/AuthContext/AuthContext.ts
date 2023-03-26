import type { Session } from "next-auth";
import { createContext } from "react";

export enum AUTH_STAGE_ENUM {
  UNAUTHORIZED = "UNAUTHORIZED",
  AUTHORIZED = "AUTHORIZED",
}

export type AuthContextType = {
  authStage: AUTH_STAGE_ENUM;
  session: Session
};

export const AuthContext = createContext<AuthContextType>({
  authStage: AUTH_STAGE_ENUM.UNAUTHORIZED,
  session: {
    expires: "",
    user: {
      id: ""
    }
  } 
});
