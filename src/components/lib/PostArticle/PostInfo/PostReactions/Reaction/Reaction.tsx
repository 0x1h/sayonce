import Twemoji from "react-twemoji";
import { SReaction, SReationsTotal } from "./SReaction.styled";
import { PostReactionsProps } from "../PostReactions";

type ReactionProps = PostReactionsProps["reactions"][number];

export const Reaction = ({ emoji, totalReactions, includesMe }: ReactionProps) => {
  return (
    <SReaction includesMe={includesMe}>
      <Twemoji>{emoji}</Twemoji>
      <SReationsTotal>{totalReactions}</SReationsTotal>
    </SReaction>
  );
};
