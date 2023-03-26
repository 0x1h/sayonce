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
      </Head>
      <Create />
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
