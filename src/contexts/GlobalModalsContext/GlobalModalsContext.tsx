import { createContext, Dispatch, SetStateAction } from "react";

type GlobalModalsContext = {
  introModalOpen: boolean;
  setIntroModalOpen?: Dispatch<SetStateAction<boolean>>;
};

export const GlobalModalsContext = createContext<GlobalModalsContext>({
  introModalOpen: false,
});
