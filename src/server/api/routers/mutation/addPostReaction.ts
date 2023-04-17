import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { TRPCError } from "@trpc/server";
import { authorized } from "../../middleware/authorized";
import {
  checkIfIExistInReactions,
  getReactionsCount,
  reactionsCount,
} from "../../controller/updateReactions";

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

      const postReactions = await ctx.prisma.postReaction.findFirst({
        where: {
          AND: [
            {
              postId: input.postId,
            },
            {
              emoji: input.emoji,
            },
          ],
        },
      });

      const totalReactions = await reactionsCount(ctx.prisma, input.postId);

      if (postReactions === null && totalReactions < 10) {
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
      }

      if (postReactions === null && totalReactions >= 10) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Post reactions max count is 10",
        });
      }

      const reactIncludesMe = await checkIfIExistInReactions(
        ctx.prisma,
        postReactions?.id || "",
        input.postId,
        ctx.id as string
      );

      if (postReactions && !!reactIncludesMe === false) {
        await ctx.prisma.postReaction.update({
          where: {
            id: postReactions.id,
          },
          data: {
            reactedBy: {
              connect: { id: ctx.id },
            },
          },
        });
      }

      if (postReactions && !!reactIncludesMe) {
        await ctx.prisma.postReaction.update({
          where: {
            id: postReactions.id,
          },
          data: {
            reactedBy: {
              disconnect: { id: ctx.id },
            },
          },
        });

        const reactionCount = await getReactionsCount(
          ctx.prisma,
          postReactions.id,
          input.postId
        );

        if (reactionCount?._count.reactedBy === 0) {
          await ctx.prisma.postReaction.delete({
            where: {
              id: reactionCount.id,
            },
          });
        }
      }

      return {
        success: true,
      };
    });
};
