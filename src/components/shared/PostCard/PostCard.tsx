import Image from "next/image";
import { SCard, SFooter, SPostCard, SText } from "./PostCard.styled";
import { useState } from "react";
import { Loading } from "../Loading";

export type PostCard = {
  img?: string;
  title: string;
  avatar?: string;
  username?: string;
  onPress?: () => void;
};

export const PostCard = ({
  title,
  img,
  username,
  avatar,
  onPress,
}: PostCard) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <SCard
      onClick={() => {
        onPress?.();
        setIsPressed(true);
      }}
      onKeyUpCapture={(e) => {
        if (e.key === "Enter") {
          onPress?.();
          setIsPressed(true);
        }
      }}
    >
      <SPostCard>
        <Image
          src={img as string}
          style={{
            objectFit: "cover",
          }}
          width={500}
          height={300}
          alt={title}
          loading="lazy"
        />
      </SPostCard>
      <SFooter>
        <SText>{title}</SText>
        {!isPressed ? (
          // <Avatar color="primary" bordered src={avatar} alt={username || ""} />
          <></>
        ) : (
          <Loading />
        )}
      </SFooter>
    </SCard>
  );
};
