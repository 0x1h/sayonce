import { z } from "zod";
import { publicProcedure } from "../../trpc";

export const authUser = () => {
  return publicProcedure
    .input(
      z.object({
        username: z.string(),
        avatar: z.string(),
        client_id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const userExist = await ctx.prisma.user.findMany({
        where: {
          id: {
            equals: input.client_id,
          },
        },
      });

      if (userExist.length === 0) {
        await ctx.prisma.user
          .create({
            data: {
              avatar: input.avatar,
              ip: ctx.ip as string,
              username: input.username,
              id: input.client_id,
            },
          })
      } else {
        await ctx.prisma.user.update({
          where: {
            id: input.client_id,
          },
          data: {
            avatar: input.avatar,
            ip: ctx.ip as string,
            username: input.username,
          },
        });
      }

      return {
        success: true,
      };
    });
};
