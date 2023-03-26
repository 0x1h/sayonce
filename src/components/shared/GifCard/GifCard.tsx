import { Card } from "@nextui-org/react";

export type GifCardProps = {
  img: string;
  title: string;
};

export const GifCard = ({ img, title }: GifCardProps) => {
  return (
    <Card
      isPressable
      style={{
        display: "table",
        overflow:'auto' 
      }}
    >
      <Card.Image
        style={{
          display: "table-row",
        }}
        src={img}
        objectFit="cover"
        // width="100%"
        alt={title}
      />
    </Card>
  );
};
