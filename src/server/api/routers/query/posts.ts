/* eslint-disable */
import { z } from "zod";
import { publicProcedure } from "../../trpc";

export const posts = () => {
  return publicProcedure
    .input(z.object({ page: z.number(), limit: z.number() }))
    .query(async ({ input, ctx }) => {
      const posts = await ctx.prisma.post.findMany({
        skip: input.page * 10,
        take: input.limit,
        include: {
          author: true
        }
      });

      return {
        succuess: true,
        posts: posts.map((post) => ({
          id: post.id,
          gif: post.gif,
          title: post.title,
          author: {
            avatar: post.author.avatar
          }
        })),
      };
    });
};
