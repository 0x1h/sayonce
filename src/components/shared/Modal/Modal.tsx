/* eslint-disable */
import { ReactNode, useRef } from "react";
import { SModal, SModalBody, SModalCard, SModalFooter } from "./SModal.styled";
import { useClickOutside } from "@/hooks/useClickOutside";
import { createPortal } from "react-dom";

type ModalProps = {
  onClose?: () => void;
  open?: boolean;
  width?: number;
  blur?: boolean;
  preventClose?: boolean;
};

export const Modal = ({
  children,
  ...props
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => {
    if (!props.preventClose) props.onClose?.();
  });

  if (!props.open) return null;

  return createPortal(
    <SModal blur={props.blur}>
      <SModalCard width={props.width} ref={modalRef}>
        {children}
      </SModalCard>
    </SModal>,
    document.body
  );
};

Modal.Header = ({ children }: React.PropsWithChildren) => {
  return <div>{children}</div>;
};

Modal.Body = ({ children }: React.PropsWithChildren) => {
  return <SModalBody>{children}</SModalBody>;
};

Modal.Footer = ({ children }: React.PropsWithChildren) => {
  return <SModalFooter>{children}</SModalFooter>;
};