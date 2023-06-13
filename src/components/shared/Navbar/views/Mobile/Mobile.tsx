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
import { useDevice } from "../../hook/useDevice";
import { Avatar } from "@/components/shared/Avatar";
import type { Session } from "next-auth";

export const Mobile = ({
  session,
  onAuthOpen,
}: {
  session?: Session;
  onAuthOpen?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const { isWindow } = useWindow();
  const { isTablet } = useDevice();
  useMenu({ open, setOpen });

  if (!isWindow) return null;

  return (
    <NavbarContext.Provider value={{ open, setOpen }}>
      {createPortal(<Menu />, document.body as HTMLDivElement)}
      <PaddedWrapper>
        <SNavbar justify>
          {!isTablet && <Link href="/">Sayonce</Link>}
          <Hamburger onToggle={() => setOpen((prev) => !prev)} />
          {isTablet && (
            <Avatar
              src={session?.user.image}
              alt={session?.user.name}
              onClick={onAuthOpen}
            />
          )}
        </SNavbar>
      </PaddedWrapper>
    </NavbarContext.Provider>
  );
};
