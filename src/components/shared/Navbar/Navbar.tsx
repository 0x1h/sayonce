import { Mobile } from "./views/Mobile";
import { Desktop } from "./views/Desktop";
import { useDevice } from "./hook/useDevice";
import { Session } from "next-auth";
import { AuthModal } from "./views/AuthModal";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useWindow } from "@/hooks/useWindow";

export const Navbar = ({ session }: { session?: Session }) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isTablet } = useDevice();
  const { isWindow } = useWindow();

  return (
    <>
      {(isWindow && authModalOpen) &&
        createPortal(
          <AuthModal session={session} close={() => setAuthModalOpen(false)} />,
          document.body
        )}
      {isTablet ? (
        <Mobile session={session} onAuthOpen={() => setAuthModalOpen(true)}/>
      ) : (
        <Desktop session={session} onAuthOpen={() => setAuthModalOpen(true)} />
      )}
    </>
  );
};
