import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { Article } from "@/components/app/Article";
import { prisma } from "@/server/db";
import { RouterOutputs } from "@/utils/api";

export type PostProps = {
  post: RouterOutputs["postById"]["post"];
};

export const PostPage: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={post?.author?.avatar} />
        <meta name="theme-color" content="#0070f1" />
      </Head>
      <Article post={post} />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const post = await prisma.post.findFirst({
    where: {
      id: Number(context.query.id),
    },
  });

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}

export default PostPage;
