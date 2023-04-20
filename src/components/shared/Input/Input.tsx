import { forwardRef } from "react";
import { SInput, SInputWrapper } from "./SInput.styled";
import { Label } from "../Label";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <SInputWrapper errorMessage={!!props.errorMessage}>
        {props.label && <Label className="text-lg">{props.label}</Label>}
        <SInput type={type} ref={ref} {...props} />
        {props.errorMessage && <p className="text-sm">{props.errorMessage}</p>}
      </SInputWrapper>
    );
  }
);
Input.displayName = "Input";

export { Input };
