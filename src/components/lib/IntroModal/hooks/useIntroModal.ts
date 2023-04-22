import { GlobalModalsContext } from "@/contexts/GlobalModalsContext";
import { useContext, useEffect, useState } from "react";

export const useIntroModal = () => {
  const [agreed, setAgreed] = useState(false);
  const [earlyClose, setEarluClose] = useState(false);
  const { setIntroModalOpen } = useContext(GlobalModalsContext);

  useEffect(() => {
    const localAgreed = localStorage.getItem("agreed");

    if (localAgreed !== null) return;

    setIntroModalOpen?.(true);
  }, [setIntroModalOpen]);

  const closeHandler = () => {
    if (!agreed) {
      const modalRef = document.getElementById("modal-body-ref");
      if (modalRef) {
        modalRef.scrollTop = modalRef.scrollHeight;
      }
      return setEarluClose(true);
    }

    localStorage.setItem("agreed", JSON.stringify("🦄"));
    setIntroModalOpen?.(false);
  };

  return { closeHandler, earlyClose, setAgreed };
};
