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

export const PostInfo = ({
  createdAt,
  description,
  title,
  gif,
}: PostProps["post"]) => {
  return (
    <SPostInfo>
      <SPostInfoTitle>{title}</SPostInfoTitle>
      <SPostInfoDescription>{description}</SPostInfoDescription>
      <SImageGif>
        <Image src={gif as string} objectFit="cover" alt="content image" />
      </SImageGif>
      <Tooltip
        color="primary"
        content={dayjs(createdAt).format("D MMMM, YYYY h:mm A")}
      >
        <SPostDate dateTime="">Published {dayjs(createdAt).fromNow()}</SPostDate>
      </Tooltip>
    </SPostInfo>
  );
};
