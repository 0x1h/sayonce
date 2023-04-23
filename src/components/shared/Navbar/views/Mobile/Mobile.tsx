import { createPortal } from "react-dom";
import { PaddedWrapper } from "@/components/shared/PaddedWrapper";
import { SNavbar } from "../../SNavbar.styled";
import { Menu } from "../Menu";
import { Cross as Hamburger } from "hamburger-react";
import { NavbarContext } from "./context/NavbarContext";
import { useState } from "react";
import { useMenu } from "./hooks/useMenu";
import Link from "next/link";
import { useWindow } from "@/hooks/useWindow";

export const Mobile = () => {
  const [open, setOpen] = useState(false);
  const { isWindow } = useWindow();
  useMenu({ open, setOpen });

  if (!isWindow) return null;

  return (
    <NavbarContext.Provider value={{ open, setOpen }}>
      {createPortal(<Menu />, document.body as HTMLDivElement)}
      <PaddedWrapper>
        <SNavbar justify>
          <Link href="/">Sayonce</Link>
          <Hamburger />
        </SNavbar>
      </PaddedWrapper>
    </NavbarContext.Provider>
  );
};
