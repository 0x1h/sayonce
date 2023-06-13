import { createContext, type Dispatch, type SetStateAction } from "react";

export type NavbarContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavbarContext = createContext<NavbarContextType>({
  open: false,
  // eslint-disable-next-line
  setOpen: () => {},
});
