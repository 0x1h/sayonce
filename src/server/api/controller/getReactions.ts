import { prisma as prismaApi } from "@/server/db";
import { Post, PostReaction, User } from "@prisma/client";

type PostType =
  | (Post & {
      author: User;
      reactions: (PostReaction & {
        reactedBy: User[];
      })[];
    })
  | null;

export const getReactions = async (
  prisma: typeof prismaApi,
  post: PostType,
  id?: string
) => {
  if (!post) return [];

  const formattedReactions = await Promise.all(
    post.reactions.map(async (reaction) => {
      const totalReactions = await prisma.postReaction.count({
        where: {
          postId: post.id,
          id: reaction.id,
        },
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
