import dayjs from "dayjs";
import {
  SPostDate,
  SPostInfo,
  SPostInfoDescription,
  SPostInfoTitle,
} from "./SPostInfo.styled";
import { Tooltip } from "@nextui-org/react";
import { PostProps } from "@/pages/post/[id]";

export const PostInfo = ({
  createdAt,
  description,
  title,
}: PostProps["post"]) => {
  return (
    <SPostInfo>
      <SPostInfoTitle>{title}</SPostInfoTitle>
      <SPostInfoDescription>{description}</SPostInfoDescription>
      <Tooltip
        color="primary"
        content={dayjs(createdAt).format("D MMMM, YYYY h:mm A")}
      >
        <SPostDate dateTime="">{dayjs(createdAt).fromNow()}</SPostDate>
      </Tooltip>
    </SPostInfo>
  );
};
