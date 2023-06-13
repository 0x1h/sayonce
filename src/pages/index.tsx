import type { GetServerSidePropsContext, NextPage } from "next";
import { authOptions } from "@/server/api/auth";
import { getServerSession } from "next-auth/next";
import Head from "next/head";
import { PostGrid } from "@/components/lib/Feed";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sayonce</title>
        <meta name="description" content="Post only once what ever you want" />
        <meta name="title" content="Sayonce" />
        <meta name="theme-color" content="#0070f1" />
      </Head>
      <PostGrid />
    </>
  );
};

export default Home;
