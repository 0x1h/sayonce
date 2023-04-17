/* eslint-disable */
import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { getReactions } from "../../controller/getReactions";

export const postReactions = () => {
  return publicProcedure
    .input(z.object({ postById: z.number() }))
    .query(async ({ input, ctx }) => {
      const postReactions = await ctx.prisma.postReaction.findMany({
        where: {
          postId: input.postById,
        },
      });


      const reactions = await getReactions(ctx.prisma, postReactions, ctx.id);

      return {
        reactions,
      };
    });
};
