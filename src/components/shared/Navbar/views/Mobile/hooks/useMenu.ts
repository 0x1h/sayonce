import { useEffect } from "react";
import type { NavbarContextType } from "../context/NavbarContext";

export const useMenu = ({ open }: NavbarContextType) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);
};
