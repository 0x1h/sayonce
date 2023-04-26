import { Navbar } from "@/components/shared/Navbar";
import { GlobalModals } from "./GlobalModalsProvider";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import type { Session } from "next-auth";

type ProviderProps = {
  session?: Session;
};

export const Provider = ({
  children,
  session,
}: React.PropsWithChildren<ProviderProps>) => {
  return (
    <AuthProvider session={session}>
      <Navbar session={session} />
      <GlobalModals>{children}</GlobalModals>
    </AuthProvider>
  );
};
