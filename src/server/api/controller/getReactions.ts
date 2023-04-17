import { prisma as prismaApi } from "@/server/db";
import { Post, PostReaction, User } from "@prisma/client";

export const getReactions = async (
  prisma: typeof prismaApi,
  reactions: PostReaction[],
  id?: string
) => {
  if (!reactions) return [];

  const formattedReactions = await Promise.all(
    reactions?.map(async (reaction) => {
      const postReaction = await prisma.postReaction.findUnique({
        where: {
          id: reaction.id,
        },
        include: { reactedBy: true },
      });

      const totalReactions = await prisma.user.count({
        where: { id: { in: postReaction?.reactedBy.map((user) => user.id) } },
      });

      const includesMe = await prisma.postReaction.findFirst({
        where: {
          id: reaction.id,
          reactedBy: {
            some: { id },
          },
        },
      });

      return {
        id: reaction.id,
        emoji: reaction.emoji,
        includesMe: Boolean(includesMe),
        totalReactions,
      };
    })
  );

  return formattedReactions;
};
