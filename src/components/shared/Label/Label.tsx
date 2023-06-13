import type { PropsWithChildren } from "react";
import { SLabel } from "./SLabel.styled";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({
  children,
  ...props
}: PropsWithChildren<LabelProps>) => {
  return <SLabel {...props}>{children}</SLabel>;
};
