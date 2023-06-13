import type { ReactionType } from "../PostInfo";

export const reactIllustion = (emoji: string, reactionData: ReactionType): ReactionType => {
  const isEmojiIncludes = reactionData.find((react) => react.emoji === emoji);

  if (isEmojiIncludes) {
    const mutateReact = { ...isEmojiIncludes };
    mutateReact.totalReactions = mutateReact.includesMe
      ? mutateReact.totalReactions - 1
      : mutateReact.totalReactions + 1;
    mutateReact.includesMe = !mutateReact.includesMe;

    return reactionData.map((reaction) => {
      if (reaction.emoji === mutateReact.emoji) {
        return mutateReact;
      }

      return reaction;
    }).filter(reaction => reaction.totalReactions > 0)
  }

  const addNewEmoji: ReactionType[number] = {
    emoji,
    includesMe: true,
    totalReactions: 1,
    id: new Date().getTime().toString(),
  };

  return [...reactionData, addNewEmoji]
};
