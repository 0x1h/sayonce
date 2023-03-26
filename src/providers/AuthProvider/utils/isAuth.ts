import { AUTH_STAGE_ENUM } from "@/contexts/AuthContext";
import type { Session } from "next-auth";

export const isAuth = (session: Session) => {
    return session?.user?.id ? AUTH_STAGE_ENUM.AUTHORIZED : AUTH_STAGE_ENUM.UNAUTHORIZED
}