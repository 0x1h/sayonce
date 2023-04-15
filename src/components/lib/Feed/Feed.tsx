/* eslint-disable no-console */
import { Grid, Loading } from "@nextui-org/react";
import { PostCard } from "@/components/shared/PostCard";
import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { useRouter } from "next/router";
import { api } from "@/utils/api";
import { SLoadingCenter } from "./SFeed.styled";
import { NoPosts } from "./NoPosts";
import { Observer } from "@/components/shared/Observer";
import { useMemo } from "react";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "@/server/api/root";
import { PostsEnd } from "./PostsEnd";

export type RouterOutput = inferRouterOutputs<AppRouter>["posts"];

export const PostGrid = () => {
  const router = useRouter();
  const {
    isLoading: postsLoading,
    fetchNextPage,
    data: postsData,
  } = api.posts.useInfiniteQuery(
    {},
    {
      getNextPageParam: (prev) => prev.nextCursor,
    }
  );
  const allPosts = useMemo(() => {
    return postsData?.pages.flatMap((post) => post.posts);
  }, [postsData]);

  const cursorId = useMemo(() => {
    return postsData?.pages.at(-1)?.nextCursor;
  }, [allPosts]);

  if (allPosts?.length === 0) {
    return <NoPosts />;
  }

  if (postsLoading) {
    return (
      <SLoadingCenter>
        <Loading color={"white"} size="xl" />
        <p>Trying to grab some posts 🙄</p>
      </SLoadingCenter>
    );
  }

  return (
    <>
      <PaddedWrapper>
        <Grid.Container gap={2} justify="flex-start">
          {allPosts?.map((post) => (
            <Grid xs={12} sm={3} key={post.id}>
              <PostCard
                // eslint-disable-next-line
                onPress={async () => await router.push(`/post/${post?.id}`)}
                title={post.title}
                img={post.gif}
                avatar={post.author.avatar}
              />
            </Grid>
          ))}
        </Grid.Container>
        <Observer
          // eslint-disable-next-line
          onObserve={fetchNextPage}
          cancel={cursorId === allPosts?.at(-1)?.id}
        />
      </PaddedWrapper>
      {cursorId === allPosts?.at(-1)?.id && (!postsLoading && <PostsEnd />)}
    </>
  );
};
