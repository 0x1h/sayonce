import { Waves } from "@/assets/Waves";
import { SFeedNoMorePosts, SOkImage, SWaves } from "../SFeed.styled";
import GoodiesOk from "@/assets/GoodiesOk.png";
import Image from "next/image";

export const PostsEnd = () => {
  return (
    <SWaves>
      <SOkImage>
        <Image
          src={GoodiesOk}
          alt={"no more posts"}
          width={200}
          height={230}
          style={{
            objectFit: "cover",
          }}
        />
      </SOkImage>
      <SFeedNoMorePosts>That&apos;s it no more posts</SFeedNoMorePosts>
      <Waves />
    </SWaves>
  );
};
