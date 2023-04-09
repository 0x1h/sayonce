/* eslint-disable */
import { z } from "zod";
import { publicProcedure } from "../../trpc";


export const postById = () => {
  return publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.findUnique({
        where: {
          id: input.id,
        },
        include: {
          author: true,
        },
      });

      return {
        succuess: true,
        post: {
          title: post?.title,
          description: post?.description,
          createdAt: post?.createdAt,
          gif: post?.gif,
          author: {
            username: post?.author.username,
            avatar: post?.author.avatar,
            joinedAt: post?.author.createdAt,
          },
        },
      };
    });
};
