import type { GetServerSidePropsContext, NextPage } from "next";
import { authOptions } from "@/server/api/auth";
import { getServerSession } from "next-auth/next";
import Head from "next/head";
import { Create } from "@/components/app/Create";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sayonce</title>
        <meta title="description" content="Create Post" />
        <meta name="theme-color" content="#0070f1" />
      </Head>
      <Create />
    </>
  );
};

export default Home;
