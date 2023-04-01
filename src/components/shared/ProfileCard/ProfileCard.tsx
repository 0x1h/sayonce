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

export const ProfileCard = () => {
  return (
    <SProfileCard>
      <SProfileAvatar>
        <Image
          alt="profile picture"
          src={
            "https://images-ext-1.discordapp.net/external/xy2IU3KyzyLtpX_KMoZ_Z-1etMm1nKGTMCKEaAZUAJU/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/484717395722895360/0b0d615cf5744e244ed0f37f935ee4ce.png"
          }
        />
      </SProfileAvatar>
      <SProfileInfo>
        <SProfileInfoName>callmenikk</SProfileInfoName>
        <SProfileDateWrapper>
          <p>Joined</p>
          <Tooltip
            color={"primary"}
            content={dayjs(new Date()).format("D MMMM, YYYY h:mm A")}
          >
            <SProfileDate>{dayjs(new Date()).fromNow()}</SProfileDate>
          </Tooltip>
        </SProfileDateWrapper>
      </SProfileInfo>
    </SProfileCard>
  );
};
