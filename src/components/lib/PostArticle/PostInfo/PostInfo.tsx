import dayjs from "dayjs";
import {
  SImageGif,
  SPostDate,
  SPostInfo,
  SPostInfoDescription,
  SPostInfoTitle,
  SUnAuthorizedWarn,
} from "./SPostInfo.styled";
import { PostProps } from "@/pages/post/[id]";
import { PostReactions } from "./PostReactions";
import { api } from "@/utils/api";
import { useContext, useState } from "react";
import { LimitWarnModal } from "../LimitWarn";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "@/server/api/root";
import { reactIllustion } from "./utils/reactIllusion";
import { AUTH_STAGE_ENUM, AuthContext } from "@/contexts/AuthContext";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

export type ReactionType =
  inferRouterOutputs<AppRouter>["postReactions"]["reactions"];

export const PostInfo = ({
  createdAt,
  description,
  title,
  gif,
  id,
}: PostProps["post"]) => {
  const { authStage } = useContext(AuthContext);
  const [reactions, setReactions] = useState<ReactionType>([]);
  const { mutate: addReactionMutate } = api.addReaction.useMutation();
  const { refetch, isLoading } = api.postReactions.useQuery(
    {
      postById: id || 0,
    },
    {
      onSuccess: ({ reactions }) => {
        setReactions(reactions);
      },
    }
  );
  const [reactLimitModal, setReactLimitModal] = useState(false);

  const reactHandler = (emoji: string | undefined) => {
    console.log(emoji);

    if (!emoji) return;

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
        <Image
          src={gif as string}
          style={{
            objectFit: "cover",
          }}
          alt="content image"
          width={700}
          height={100}
        />
      </SImageGif>
      {authStage === AUTH_STAGE_ENUM.UNAUTHORIZED && (
        <SUnAuthorizedWarn>Authorize first to react</SUnAuthorizedWarn>
      )}
      <PostReactions
        isLoading={isLoading}
        postId={id as number}
        reactions={reactions}
        onEmojiClick={reactHandler}
        authorized={authStage}
      />
      <SPostDate
        dateTime={createdAt?.toString()}
        data-tooltip-id="post-date-tooltip"
        data-tooltip-content={dayjs(createdAt).format("D MMMM, YYYY h:mm A")}
      >
        Published {dayjs(createdAt).fromNow()}
      </SPostDate>
      <Tooltip id="post-date-tooltip" />
    </SPostInfo>
  );
};
