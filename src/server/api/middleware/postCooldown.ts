import { TRPCError } from "@trpc/server";
import { t } from "../trpc";

export const postCooldown = t.middleware(async ({ ctx, next }) => {
  const hours24 = Date.now() - 24 * 60 * 60 * 1000;
  const lastDay = new Date(hours24).toISOString();

  const clientIp = await ctx.prisma.user.findFirst({
    where: {
      id: {
        equals: ctx.id,
      },
    },
  });

  const postWithin24Hours = await ctx.prisma.post.findFirst({
    where: {
      AND: [
        {
          userId: {
            equals: clientIp?.id,
          },
        },
        {
          createdAt: {
            gte: lastDay,
          },
        },
      ],
    },
  });

  if (postWithin24Hours) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      cause: "you need to wait",
      message: postWithin24Hours?.createdAt.toString(),
    });
  }

  return next();
});
