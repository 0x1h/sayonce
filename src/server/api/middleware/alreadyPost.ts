import { TRPCError } from "@trpc/server";
import { t } from "../trpc";

export const alreadyPost = t.middleware(async ({ ctx, next, }) => {
  const clientIp = await ctx.prisma.user.findFirst({
    where: {
      ip: {
        equals: ctx.ip,
      },
    },
  });

  const alreadyPosted = await ctx.prisma.post.findMany({
    where: {
      userId: {
        equals: clientIp?.id,
      },
    },
  });

  if (alreadyPosted.length > 0) {
    throw new TRPCError({ code: "FORBIDDEN", message: "already posted" });
  }

  return next();
});
