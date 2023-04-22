import { forwardRef } from "react";
import { SInput, SInputWrapper, SLoading } from "./SInput.styled";
import { Label } from "../Label";
import { Loading } from "../Loading";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  size?: "lg";
  errorMessage?: string;
  bordered?: boolean;
  loading?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <SInputWrapper errorMessage={!!props.errorMessage}>
        {props.label && <Label className="text-lg">{props.label}</Label>}
        <SInput type={type} ref={ref} {...props} />
        {props.errorMessage && <p className="text-sm">{props.errorMessage}</p>}
        {props.loading && (
          <SLoading>
            <Loading color="white" size="xs"/>
          </SLoading>
        )}
      </SInputWrapper>
    );
  }
);
Input.displayName = "Input";

export { Input };
