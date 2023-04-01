import type { GetServerSidePropsContext, NextPage } from "next";
import { authOptions } from "@/server/api/auth";
import { getServerSession } from "next-auth/next";
import Head from "next/head";
import { Post } from "@/components/app/Post";

export type PostProps = {
  post: {
    title: string;
    description: string;
  };
};

export const PostPage: NextPage<PostProps> = ({ post }) => {  
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta title="description" content={post.description} />
      </Head>
      <Post />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
      post: {
        title: "[Title]",
        description: "[Description]",
      },
    },
  };
}

export default PostPage;
