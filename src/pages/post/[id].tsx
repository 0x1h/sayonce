import type { GetServerSidePropsContext, NextPage } from "next";
import { authOptions } from "@/server/api/auth";
import { getServerSession } from "next-auth/next";
import Head from "next/head";
import { Post } from "@/components/app/Post";
import { createServerSideHelpers } from "@trpc/react-query/server";
import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter, appRouter } from "@/server/api/root";
import { prisma } from "@/server/db";

type RouterOutput = inferRouterOutputs<AppRouter>;

export type PostProps = {
  post: RouterOutput["postById"]["post"];
};

export const PostPage: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta title="description" content={post?.description} />
      </Head>
      <Post post={post} />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const id = context.params?.id;

  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: {
      ip: "",
      prisma: prisma,
      session: session,
    },
  });

  const { post } = await ssg.postById.fetch({
    id: Number(id),
  });

  return {
    props: {
      session,
      post: JSON.parse(JSON.stringify(post)) as RouterOutput["postById"]["post"],
    },
  };
}

export default PostPage;
