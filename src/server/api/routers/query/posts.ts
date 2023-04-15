/* eslint-disable */
import { z } from "zod";
import { publicProcedure } from "../../trpc";

export const posts = () => {
  return publicProcedure
    .input(
      z.object({
        skip: z.number().optional(),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { cursor } = input;
      const posts = await ctx.prisma.post.findMany({
        take: 11,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { createdAt: "desc" },
        include: { author: true },
      });

      const nextCursor = posts.length ? posts[posts.length - 1]?.id : null;

      posts.length = 10;

      return {
        posts: posts.map((post) => ({
          id: post.id,
          gif: post.gif,
          title: post.title,
          author: {
            avatar: post.author.avatar,
          },
        })),
        nextCursor,
      };
    });
};
