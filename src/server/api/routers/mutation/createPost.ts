import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { alreadyPost } from "../../middleware/alreadyPost";
import { TRPCError } from "@trpc/server";
import { authorized } from "../../middleware/authorized";

export const createPost = () => {
  return publicProcedure
    .use(authorized)
    .use(alreadyPost)
    .input(
      z.object({
        client_id: z.string(),
        title: z.string(),
        gif: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.post.create({
          data: {
            gif: input.gif,
            description: input.description,
            title: input.title,
            userId: input.client_id,
          },
        });

        return {
          success: true,
          message: "post created",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: JSON.stringify(error),
        });
      }
    });
};
