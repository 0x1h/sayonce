import Head from "next/head";
import { PostGrid } from "@/components/lib/Feed";

const Home = () => {
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
