import Twemoji from "react-twemoji";
import { SReaction, SReationsTotal } from "./SReaction.styled";
import { PostReactionsProps } from "../PostReactions";

type ReactionProps = PostReactionsProps["reactions"][number] & {
  onEmojiClick: (emoji: string) => void;
};

export const Reaction = ({
  emoji,
  totalReactions,
  includesMe,
  onEmojiClick,
}: ReactionProps) => {
  return (
    <SReaction includesMe={includesMe} onClick={() => onEmojiClick(emoji)}>
      <Twemoji>{emoji}</Twemoji>
      <SReationsTotal>{totalReactions}</SReationsTotal>
    </SReaction>
  );
};
