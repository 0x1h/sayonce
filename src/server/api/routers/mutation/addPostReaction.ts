import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
import { authorized } from "../../middleware/authorized";

export const addReaction = () => {
  return publicProcedure
    .use(authorized)
    .input(
      z.object({
        emoji: z.string(),
        postId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.findFirst({
        where: {
          id: {
            equals: input.postId,
          },
        },
      });

      if (!post) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      await ctx.prisma.postReaction.create({
        data: {
          emoji: input.emoji,
          reactedBy: { connect: { id: ctx.id } },
          postId: input.postId,
        },
      });

      return {
        success: true,
      };
    });
};
