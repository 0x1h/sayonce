import { createTRPCRouter } from "@/server/api/trpc";
import { gif } from "./routers/query/gif";
import { authUser } from "./routers/mutation/authUser";
import { createPost } from "./routers/mutation/createPost";
import { posts } from "./routers/query/posts";
import { postById } from "./routers/query/postById";
import { postAbility } from "./routers/query/isPosted";
import { addReaction } from "./routers/mutation/addPostReaction";
import { postReactions } from "./routers/query/postReactions";

export const appRouter = createTRPCRouter({
  gif: gif(),
  authUser: authUser(),
  createPost: createPost(),
  posts: posts(),
  postById: postById(),
  postAbility: postAbility(),
  addReaction: addReaction(),
  postReactions: postReactions()
});

// export type definition of API
export type AppRouter = typeof appRouter;
