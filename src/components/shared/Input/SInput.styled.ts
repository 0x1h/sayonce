import styled, { css } from "styled-components";
import tw from "twin.macro";

export type InputProps = {
  errorMessage?: boolean;
};

export const SInputWrapper = styled.div<InputProps>`
  ${tw`transition-all relative`}
  p {
    ${tw`text-[12px]`}
  }

  ${(props) => {
    if (props.errorMessage) {
      return css`
        input {
          ${tw`bg-[#300313]!`}
        }
        ${tw`text-[#f4256d]!`}
      `;
    }
  }}
`;

export const SInput = styled.input<{ bordered?: boolean; size?: "lg" }>`
  ${tw`flex h-14 text-font-lg w-full bg-ragoon rounded-2xl px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-all`}
  &:focus {
    transform: translateY(-2px);
  }
  ${(props) => {
    if (props.bordered) {
      return css`
        ${tw`border border-solid border-white`}
      `;
    }
  }}
  ${(props) => {
    if (props.size) {
      return css`
        ${tw`h-12`}
      `;
    }
  }}
`;


export const SLoading = styled.div`
  ${tw`absolute top-1/2 right-3`};
  transform: translateY(-50%);
`