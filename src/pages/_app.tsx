import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useSSR } from "@nextui-org/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Provider } from "@/providers";
import GlobalStyles from "@/styles/GlobalStyles";

const MyApp: AppType<{ session?: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { isBrowser } = useSSR();

  if (!isBrowser) return null;

  return (
    <SessionProvider session={session}>
      <Provider session={session}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
