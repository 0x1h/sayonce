import { AddEmoji } from "@/assets/AddEmoji";
import dynamic from "next/dynamic";
const Reaction = dynamic(() => import("./Reaction"));
const EmojiPicker = dynamic(() => import("@emoji-mart/react"));
import { SAddReaction, SPostReactions } from "./SPostReactions.styled";
import { AUTH_STAGE_ENUM } from "@/contexts/AuthContext";
import { Tooltip } from "react-tooltip";
import { Loading } from "@/components/shared/Loading";
import { Popover } from "react-tiny-popover";
import { useState } from "react";
import type { RouterOutputs } from "@/utils/api";

export type PostReactionsProps = {
  postId: number;
  onEmojiClick: (emoji: string | undefined) => void;
  reactions: RouterOutputs["postReactions"]["reactions"];
  isLoading: boolean;
  authorized: AUTH_STAGE_ENUM;
};

export const PostReactions = ({
  reactions,
  isLoading,
  authorized,
  onEmojiClick,
}: PostReactionsProps) => {
  const [openPopover, setOpenPopover] = useState(false);

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
        <Popover
          isOpen={openPopover}
          onClickOutside={() => setOpenPopover(false)}
          positions={["top", "right"]}
          content={
            <EmojiPicker
              set={"twitter"}
              previewPosition={"none"}
              onEmojiSelect={(e: { native: string }) => {
                onEmojiClick?.(e.native);
              }}
            />
          }
        >
          <SAddReaction
            data-tooltip-id="react-tooltip"
            onClick={() => setOpenPopover(true)}
          >
            <AddEmoji />
          </SAddReaction>
        </Popover>
      )}
      <Tooltip content="Add Reaction" id="react-tooltip" />
    </SPostReactions>
  );
};
