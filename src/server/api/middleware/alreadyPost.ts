import { TRPCError } from "@trpc/server";
import { t } from "../trpc";

export const alreadyPost = t.middleware(async ({ ctx, input, next }) => {
  const clientIp = await ctx.prisma.user.findMany({
    where: {
      ip: {
        equals: ctx.ip,
      },
    },
  });

  const alreadyPosted = await ctx.prisma.post.findMany({
    where: {
      userId: {
        equals: clientIp[0]?.ip,
      },
    },
  });

  if (alreadyPosted) {
    throw new TRPCError({ code: "FORBIDDEN", message: "already posted" });
  }

  return next();
});
