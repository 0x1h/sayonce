import { Card } from "@nextui-org/react";

export type GifCardProps = {
  img: string;
  title: string;
  onClick?: (img: string) => void
};

export const GifCard = ({ img, title, onClick }: GifCardProps) => {
  return (
    <Card
      onClick={() => onClick?.(img)}
      isPressable
    >
      <Card.Image
        src={img}
        objectFit="cover"
        width={'100%'}
        alt={title}
        height={'100%'}
      />
    </Card>
  );
};
