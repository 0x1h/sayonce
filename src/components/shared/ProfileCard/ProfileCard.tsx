import { PostProps } from "@/pages/post/[id]";
import {
  SProfileAvatar,
  SProfileCard,
  SProfileDate,
  SProfileDateWrapper,
  SProfileInfo,
  SProfileInfoName,
} from "./SProfileCard.styled";
import { Image, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const ProfileCard = ({ author }: PostProps["post"]) => {
  return (
    <SProfileCard>
      <SProfileAvatar>
        <Image
          objectFit="cover"
          alt="profile picture"
          src={author?.avatar as string}
        />
      </SProfileAvatar>
      <SProfileInfo>
        <SProfileInfoName>{author?.username}</SProfileInfoName>
        <SProfileDateWrapper>
          <p>Joined</p>
          <Tooltip
            color={"primary"}
            content={dayjs(author?.joinedAt).format("D MMMM, YYYY h:mm A")}
          >
            <SProfileDate>{dayjs(author?.joinedAt).fromNow()}</SProfileDate>
          </Tooltip>
        </SProfileDateWrapper>
      </SProfileInfo>
    </SProfileCard>
  );
};
