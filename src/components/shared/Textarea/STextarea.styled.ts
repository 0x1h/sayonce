import styled, { css } from "styled-components";
import tw from "twin.macro";

export type TextareaProps = {
  errorMessage?: boolean;
};

export const STextareaWrapper = styled.div<TextareaProps>`
  ${tw`transition-all`}
  p {
    ${tw`text-[12px]`}
  }
  ${(props) => {
    if (props.errorMessage) {
      return css`
        textarea {
          ${tw`bg-[#300313]!`}
        }
        ${tw`text-[#f4256d]!`}
      `;
    }
  }}
`;

export const STextarea = styled.textarea`
  ${tw`flex h-20 w-full text-font-lg resize-none bg-ragoon rounded-2xl px-3 py-2 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`}
  :focus {
    outline: #0070f1;
    transform: translateY(-2px);
  }
`;
