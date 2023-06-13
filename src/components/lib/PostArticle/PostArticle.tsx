import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { ProfileCard } from "@/components/shared/ProfileCard";
import { PostInfo } from "./PostInfo/PostInfo";
import { SPostArticle } from "./SPostArticle.styled";
import type { PostProps } from "@/pages/post/[id]";

export const PostArticle = (post: PostProps["post"]) => {
  return (
    <PaddedWrapper>
      <SPostArticle>
        <PostInfo {...post} />
        <ProfileCard {...post} />
      </SPostArticle>
    </PaddedWrapper>
  );
};
