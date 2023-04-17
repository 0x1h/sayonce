import { AddEmoji } from "@/assets/AddEmoji";
import { Reaction } from "./Reaction";
import { SAddReaction, SPostReactions } from "./SPostReactions.styled";
import { Popover, Tooltip } from "@nextui-org/react";
import EmojiPicker from "@emoji-mart/react";
import { RouterOutput } from "@/pages/post/[id]";

export type PostReactionsProps = {
  postId: number;
  onEmojiClick?: (emoji: string) => void;
  reactions: RouterOutput["postById"]["post"]["reactions"];
};

export const PostReactions = ({
  reactions,
  onEmojiClick,
}: PostReactionsProps) => {
  return (
    <SPostReactions>
      {reactions?.map((reaction) => (
        <Reaction {...reaction} key={reaction.id} />
      ))}
      <Tooltip color={"primary"} content="Add Reaction">
        <Popover placement="top" shouldCloseOnBlur>
          <Popover.Trigger>
            <SAddReaction>
              <AddEmoji />
            </SAddReaction>
          </Popover.Trigger>
          <Popover.Content>
            <EmojiPicker
              set={"twitter"}
              previewPosition={"none"}
              onEmojiSelect={(e: { native: string }) =>
                onEmojiClick?.(e.native)
              }
            />
          </Popover.Content>
        </Popover>
      </Tooltip>
    </SPostReactions>
  );
};
