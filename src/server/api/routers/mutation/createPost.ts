import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { alreadyPost } from "../../middleware/alreadyPost";
import { TRPCError } from "@trpc/server";

export const createPost = () => {
  return publicProcedure
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
            description: input.gif,
            title: input.title,
            userId: input.client_id,
          },
        });

        return {
          success: true,
          message: "post created",
        };
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    });
};
