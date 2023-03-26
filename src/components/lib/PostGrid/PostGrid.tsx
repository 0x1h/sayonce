import { Grid } from "@nextui-org/react";
import { data } from "./data";
import { PostCard } from "@/components/shared/PostCard";
import { PaddedWrapper } from "@/components/shared/PaddedWrapper";

export const PostGrid = () => {
  return (
    <PaddedWrapper>
      <Grid.Container gap={2} justify="flex-start">
        {data.map((post) => (
          <Grid xs={6} sm={3} key={post.id}>
            <PostCard title={post.title} img={post.postImage} avatar={post.avatar}/>
          </Grid>
        ))}
      </Grid.Container>
    </PaddedWrapper>
  );
};