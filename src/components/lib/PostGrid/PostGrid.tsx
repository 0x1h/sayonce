import { Grid } from "@nextui-org/react";
import { data } from "./data";
import { PostCard } from "@/components/shared/PostCard";
import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { useRouter } from "next/router";
import { api } from "@/utils/api";

export const PostGrid = () => {
  const router = useRouter();
  const posts = api.posts.useQuery({
    limit: 10,
    page: 0,
  });

  return (
    <PaddedWrapper>
      <Grid.Container gap={2} justify="flex-start">
        {posts.data?.posts.map((post) => (
          <Grid xs={6} sm={3} key={post.id}>
            <PostCard
              // eslint-disable-next-line
              onPress={() => router.push(`/post/${post.id}`)}
              title={post.title}
              img={post.gif}
              avatar={post.author.avatar}
            />
          </Grid>
        ))}
      </Grid.Container>
    </PaddedWrapper>
  );
};
