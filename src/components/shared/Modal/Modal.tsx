/* eslint-disable */
import { CSSProperties, ReactNode, useRef, useState } from "react";
import { SModal, SModalBody, SModalCard, SModalFooter } from "./SModal.styled";
import { useClickOutside } from "@/hooks/useClickOutside";
import { createPortal } from "react-dom";
import { useWindow } from "@/hooks/useWindow";

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
  const { isWindow } = useWindow();
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => {
    if (!props.preventClose) props.onClose?.();
  });

  if (!props.open || !isWindow) return null;

  return createPortal(
    <SModal blur={props.blur}>
      <SModalCard width={props.width} ref={modalRef}>
        {children}
      </SModalCard>
    </SModal>,
    document.body
  );
};

Modal.Header = ({
  children,
  style,
}: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  return <div style={style}>{children}</div>;
};

Modal.Body = ({
  children,
  style,
}: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  return <SModalBody style={style}>{children}</SModalBody>;
};

Modal.Footer = ({
  children,
  style,
}: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  return <SModalFooter style={style}>{children}</SModalFooter>;
};
