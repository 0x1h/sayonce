import { createTRPCRouter } from "@/server/api/trpc";
import { gif } from "./routers/query/gif";

export const appRouter = createTRPCRouter({
  gif: gif(),
});

// export type definition of API
export type AppRouter = typeof appRouter;
