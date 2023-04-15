/* eslint-disable */
import { publicProcedure } from "../../trpc";
import { alreadyPost } from "../../middleware/alreadyPost";
import { z } from "zod";

export const isPosted = () => {
  return publicProcedure
    .input(z.object({ ip: z.string() }))
    .use(alreadyPost)
    .mutation(async () => {
      return {
        success: true,
        message: "user never has posted",
      };
    });
};
