import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { ProfileCard } from "@/components/shared/ProfileCard";
import { PostInfo } from "./PostInfo/PostInfo";
import { SPostArticle } from "./SPostArticle.styled";

export const PostArticle = () => {
  return (
    <PaddedWrapper>
      <SPostArticle>
        <PostInfo />
        <ProfileCard />
      </SPostArticle>
    </PaddedWrapper>
  );
};
