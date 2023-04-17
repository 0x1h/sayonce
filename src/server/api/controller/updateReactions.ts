import { prisma as prismaApi } from "@/server/db";

export const checkIfIExistInReactions = async (
  prisma: typeof prismaApi,
  reactionId: string,
  postId: number,
  clientId: string
) => {
  const checkIfIExistInReactions = await prisma.postReaction.findFirst({
    where: {
      AND: [
        {
          postId,
        },
        {
          id: reactionId,
        },
        {
          reactedBy: {
            some: {
              id: clientId,
            },
          },
        },
      ],
    },
  });

  return checkIfIExistInReactions;
};

export const getReactionsCount = async (
  prisma: typeof prismaApi,
  reactionId: string,
  postId: number
) => {
  const reactionCount = await prisma.postReaction.findFirst({
    where: {
      AND: [
        {
          postId,
        },
        {
          id: reactionId,
        },
      ],
    },
    include: {
      _count: {
        select: {
          reactedBy: true,
        },
      },
    },
  });

  return reactionCount;
};

export const reactionsCount = async (
  prisma: typeof prismaApi,
  postId: number
) => {
  const reactionsCount = await prisma.postReaction.count({
    where: {
      postId,
    },
  });

  return reactionsCount
};
