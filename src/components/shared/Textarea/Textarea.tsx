import * as React from "react";

import { Label } from "../Label";
import { STextarea, STextareaWrapper } from "./STextarea.styled";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return (
      <STextareaWrapper errorMessage={!!props.errorMessage}>
        {props.label && <Label className="text-lg">{props.label}</Label>}
        <STextarea ref={ref} {...props} />
        {props.errorMessage && (
          <p>{props.errorMessage}</p>
        )}
      </STextareaWrapper>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
