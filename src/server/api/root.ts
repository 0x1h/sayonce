import { createTRPCRouter } from "@/server/api/trpc";
import { gif } from "./routers/query/gif";
import { authUser } from "./routers/mutation/authUser";

export const appRouter = createTRPCRouter({
  gif: gif(),
  authUser: authUser(),
});

// export type definition of API
export type AppRouter = typeof appRouter;
