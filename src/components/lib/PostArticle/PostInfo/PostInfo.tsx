import dayjs from "dayjs";
import {
  SImageGif,
  SPostDate,
  SPostInfo,
  SPostInfoDescription,
  SPostInfoTitle,
} from "./SPostInfo.styled";
import { Image, Tooltip } from "@nextui-org/react";
import { PostProps } from "@/pages/post/[id]";
import { PostReactions } from "./PostReactions";
import { api } from "@/utils/api";

export const PostInfo = ({
  createdAt,
  description,
  title,
  gif,
  reactions,
  id,
}: PostProps["post"]) => {
  const { mutate: addReactionMutate } = api.addReaction.useMutation();

  const reactHandler = (emoji: string) => {
    addReactionMutate({
      emoji,
      postId: id as number,
    });
  };

  return (
    <SPostInfo>
      <SPostInfoTitle>{title}</SPostInfoTitle>
      <SPostInfoDescription>{description}</SPostInfoDescription>
      <SImageGif>
        <Image src={gif as string} objectFit="cover" alt="content image" />
      </SImageGif>
      <PostReactions
        postId={id as number}
        reactions={reactions}
        onEmojiClick={reactHandler}
      />
      <Tooltip
        color="primary"
        content={dayjs(createdAt).format("D MMMM, YYYY h:mm A")}
      >
        <SPostDate dateTime={createdAt?.toString()}>
          Published {dayjs(createdAt).fromNow()}
        </SPostDate>
      </Tooltip>
    </SPostInfo>
  );
};
