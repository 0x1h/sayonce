import { Navbar } from "@/components/shared/Navbar";
import { GlobalModals } from "./GlobalModalsProvider";
import { NextUi } from "./NextUiProvider";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <NextUi>
      <Navbar />
      <GlobalModals>{children}</GlobalModals>
    </NextUi>
  );
};
