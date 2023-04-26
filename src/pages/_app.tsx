import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import 'react-tooltip/dist/react-tooltip.css'

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Provider } from "@/providers";
import GlobalStyles from "@/styles/GlobalStyles";

const MyApp: AppType<{ session?: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
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
