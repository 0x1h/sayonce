import type { GetServerSidePropsContext, NextPage } from "next";
import { authOptions } from "@/server/api/auth";
import { getServerSession } from "next-auth/next";
import Head from "next/head";
import { PostGrid } from "@/components/lib/PostGrid";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sayonce</title>
        <meta title="description" content="Post only once what ever you want" />
      </Head>
      <PostGrid />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}

export default Home;
