import { forwardRef } from "react";

import { SButton } from "./SButton.styled";
import type { ExpandStyled } from "@/types/ExpandStyled.types";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "xs" | "lg" | "xl";
  color?: "success" | "error";
  flat?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return <SButton ref={ref} {...(props as ExpandStyled<typeof SButton>)} />;
  }
);

Button.displayName = "Button";
