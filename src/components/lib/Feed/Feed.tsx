/* eslint-disable no-console */
import { PostCard } from "@/components/shared/PostCard";
import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { useRouter } from "next/router";
import { api } from "@/utils/api";
import { SGridContainer, SLoadingCenter } from "./SFeed.styled";
import { NoPosts } from "./NoPosts";
import { Observer } from "@/components/shared/Observer";
import { useMemo } from "react";
import { type inferRouterOutputs } from "@trpc/server";
import { type AppRouter } from "@/server/api/root";
import { PostsEnd } from "./PostsEnd";
import { Loading } from "@/components/shared/Loading";

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
        <SGridContainer>
          {allPosts?.map((post) => (
            <PostCard
              key={post.id}
              // eslint-disable-next-line
              onPress={async () => await router.push(`/post/${post?.id}`)}
              title={post.title}
              img={post.gif}
              avatar={post.author.avatar}
            />
          ))}
        </SGridContainer>
        <Observer
          // eslint-disable-next-line
          onObserve={fetchNextPage}
          cancel={cursorId === allPosts?.at(-1)?.id}
        />
      </PaddedWrapper>
      {cursorId === allPosts?.at(-1)?.id && !postsLoading && <PostsEnd />}
    </>
  );
};
