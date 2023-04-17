/* eslint-disable */
import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { getReactions } from "../../controller/getReactions";

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
          reactions: true,
        },
      });

      const reactions = await getReactions(ctx.prisma, post, ctx.id);

      return {
        succuess: true,
        post: {
          id: post?.id,
          title: post?.title,
          description: post?.description,
          createdAt: post?.createdAt,
          gif: post?.gif,
          author: {
            username: post?.author.username,
            avatar: post?.author.avatar,
            joinedAt: post?.author.createdAt,
          },
          reactions,
        },
      };
    });
};
