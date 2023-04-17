import { AddEmoji } from "@/assets/AddEmoji";
import { Reaction } from "./Reaction";
import { SAddReaction, SPostReactions } from "./SPostReactions.styled";
import { Loading, Popover, Tooltip } from "@nextui-org/react";
import EmojiPicker from "@emoji-mart/react";
import { RouterOutput } from "@/pages/post/[id]";
import { AUTH_STAGE_ENUM } from "@/contexts/AuthContext";

export type PostReactionsProps = {
  postId: number;
  onEmojiClick: (emoji: string | undefined) => void;
  reactions: RouterOutput["postReactions"]["reactions"];
  isLoading: boolean;
  authorized: AUTH_STAGE_ENUM;
};

export const PostReactions = ({
  reactions,
  isLoading,
  authorized,
  onEmojiClick,
}: PostReactionsProps) => {
  return (
    <SPostReactions>
      {reactions?.map((reaction) => (
        <Reaction
          {...reaction}
          key={reaction.id}
          onEmojiClick={(emoji) => {
            if (authorized === AUTH_STAGE_ENUM.AUTHORIZED) {
              onEmojiClick?.(emoji);
              return;
            }

            onEmojiClick(undefined);
          }}
        />
      ))}
      {isLoading && <Loading size="xs" />}
      {authorized === AUTH_STAGE_ENUM.AUTHORIZED && (
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
                onEmojiSelect={(e: { native: string }) => {
                  onEmojiClick?.(e.native);
                }}
              />
            </Popover.Content>
          </Popover>
        </Tooltip>
      )}
    </SPostReactions>
  );
};
