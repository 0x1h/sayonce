import { Avatar, Card, Loading, Row } from "@nextui-org/react";
import Image from "next/image";
import { SPostCard, SText } from "./PostCard.styled";
import { useState } from "react";

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
    <Card
      isPressable
      onPress={() => {
        onPress?.();
        setIsPressed(true);
      }}
    >
      <Card.Body css={{ p: 0 }}>
        <SPostCard>
          <Image
            src={img as string}
            style={{
              objectFit: "cover",
            }}
            width={500}
            height={300}
            alt={title}
          />
        </SPostCard>
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row justify="space-between" align="center">
          <SText b>{title}</SText>
          {!isPressed ? (
            <Avatar
              color="primary"
              bordered
              src={avatar}
              alt={username || ""}
            />
          ) : (
            <Loading size="md" />
          )}
        </Row>
      </Card.Footer>
    </Card>
  );
};
