import dayjs from "dayjs";
import {
  SPostDate,
  SPostInfo,
  SPostInfoDescription,
  SPostInfoTitle,
} from "./SPostInfo.styled";
import { Tooltip } from "@nextui-org/react";

export const PostInfo = () => {
  return (
    <SPostInfo>
      <SPostInfoTitle>Slaying everydayy ✨</SPostInfoTitle>
      <SPostInfoDescription>Lorem Ipsum is simply</SPostInfoDescription>
      <Tooltip
        color="primary"
        content={dayjs(new Date()).format("D MMMM, YYYY h:mm A")}
      >
        <SPostDate dateTime="">{dayjs(new Date()).fromNow()}</SPostDate>
      </Tooltip>
    </SPostInfo>
  );
};
