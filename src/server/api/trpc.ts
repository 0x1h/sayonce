import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";
import { prisma } from "@/server/db";

import { getServerAuthSession } from "@/server/api/auth";

type CreateContextOptions = {
  session: Session | null;
  id: string | undefined;
};

const createInnerTRPCContext = ({ session, id }: CreateContextOptions) => {
  return {
    session,
    prisma,
    id,
  };
};

export const createTRPCContext = async ({
  req,
  res,
}: CreateNextContextOptions) => {
  const session = await getServerAuthSession({ req, res });

  return createInnerTRPCContext({
    session,
    id: session?.user.id,
  });
};

import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

export const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const publicProcedure = t.procedure;
export const createTRPCRouter = t.router;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
