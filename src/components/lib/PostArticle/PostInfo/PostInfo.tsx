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
import { useState } from "react";
import { LimitWarnModal } from "../LimitWarn";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "@/server/api/root";
import { reactIllustion } from "./utils/reactIllusion";

export type ReactionType =
  inferRouterOutputs<AppRouter>["postReactions"]["reactions"];

export const PostInfo = ({
  createdAt,
  description,
  title,
  gif,
  id,
}: PostProps["post"]) => {
  const [reactions, setReactions] = useState<ReactionType>([]);
  const { mutate: addReactionMutate } =
    api.addReaction.useMutation();
  const { refetch, isLoading } = api.postReactions.useQuery(
    {
      postById: id as number,
    },
    {
      onSuccess: ({ reactions }) => {
        setReactions(reactions);
      },
    }
  );
  const [reactLimitModal, setReactLimitModal] = useState(false);

  const reactHandler = (emoji: string) => {
    setReactions((prev) => reactIllustion(emoji, prev));
    addReactionMutate(
      {
        emoji,
        postId: id as number,
      },
      {
        onSuccess: () => {
          // eslint-disable-next-line
          refetch();
        },
        onError: () => {
          setReactLimitModal(true);
        },
      }
    );
  };

  return (
    <SPostInfo>
      {reactLimitModal && (
        <LimitWarnModal onClose={() => setReactLimitModal(false)} />
      )}
      <SPostInfoTitle>{title}</SPostInfoTitle>
      <SPostInfoDescription>{description}</SPostInfoDescription>
      <SImageGif>
        <Image src={gif as string} objectFit="cover" alt="content image" />
      </SImageGif>
      <PostReactions
        isLoading={isLoading}
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
