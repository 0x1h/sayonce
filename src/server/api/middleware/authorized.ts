import { t } from "../trpc";
import { TRPCError } from "@trpc/server";

export const authorized = t.middleware(async ({ ctx, next }) => {
  if(!ctx.session){
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "unauthorized user"
    })
  }

  return next();
});
