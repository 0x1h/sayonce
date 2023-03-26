import { Card } from "@nextui-org/react";

export type GifCardProps = {
  img: string;
  title: string;
};

export const GifCard = ({ img, title }: GifCardProps) => {
  return (
    <Card
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
