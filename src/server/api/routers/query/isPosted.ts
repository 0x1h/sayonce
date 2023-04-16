/* eslint-disable */
import { publicProcedure } from "../../trpc";
import { alreadyPost } from "../../middleware/alreadyPost";

export const isPosted = () => {
  return publicProcedure
    .use(alreadyPost)
    .mutation(async () => {
      return {
        success: true,
        message: "user never has posted",
      };
    });
};
