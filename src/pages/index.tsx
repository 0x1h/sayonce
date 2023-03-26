import { GetServerSidePropsContext, type NextPage } from "next";
import { authOptions } from '@/server/api/auth'
import { getServerSession } from "next-auth/next"


const Home: NextPage = () => {
  return <main></main>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  return {
    props: {
      session,
    },
  }
}

export default Home;
