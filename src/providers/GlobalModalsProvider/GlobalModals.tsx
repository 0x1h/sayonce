import { IntroModal } from "@/components/shared/Modals/IntroModal";
import { GlobalModalsContext } from "@/contexts/GlobalModalsContext";
import { useState } from "react";

export const GlobalModals = ({ children }: React.PropsWithChildren) => {
  const [introModalOpen, setIntroModalOpen] = useState(false);

  return (
    <GlobalModalsContext.Provider value={{ introModalOpen, setIntroModalOpen }}>
      <IntroModal />
      {children}
    </GlobalModalsContext.Provider>
  );
};
