import type { PostProps } from "@/pages/post/[id]";
import {
  SProfileAvatar,
  SProfileCard,
  SProfileDate,
  SProfileDateWrapper,
  SProfileInfo,
  SProfileInfoName,
} from "./SProfileCard.styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
dayjs.extend(relativeTime);

export const ProfileCard = ({ author }: PostProps["post"]) => {
  return (
    <SProfileCard>
      <SProfileAvatar>
        <Image
          objectFit="cover"
          alt="profile picture"
          src={author?.avatar as string}
          width={100}
          height={100}
        />
      </SProfileAvatar>
      <SProfileInfo>
        <SProfileInfoName>{author?.username}</SProfileInfoName>
        <SProfileDateWrapper>
          <SProfileDate data-tooltip-id="joined-tooltip">
            <p>Joined</p>
            {dayjs(author?.joinedAt).fromNow()}
          </SProfileDate>
        </SProfileDateWrapper>
      </SProfileInfo>
      <Tooltip
        content={dayjs(author?.joinedAt).format("D MMMM, YYYY h:mm A")}
        id="joined-tooltip"
      />
    </SProfileCard>
  );
};
