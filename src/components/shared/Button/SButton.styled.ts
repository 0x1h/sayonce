import styled, { css } from "styled-components";
import tw from "twin.macro";

type ButtonProps = {
  size?: "xs" | "lg" | "xl";
  color?: "success" | "error";
  flat?: boolean;
};

export const SButton = styled.button<ButtonProps>`
  ${tw`inline-flex py-3 items-center bg-blue justify-center rounded-2xl text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none ring-offset-background`};
  :active {
    transition: 0.1 ease;
    ${tw`scale-[0.99]`}
  }
  ${(props) => {
    if (props.flat) {
      return css`
        ${tw`bg-blue/20 text-blue`};
      `;
    }
    if (props.flat && props.color === "error") {
      return css`
        ${tw`bg-[#f4256d]/20! text-[#f4256d]!`};
      `;
    }
  }}
  ${(props) => {
    if (props.size === "lg") {
      return css``;
    }
    if (props.size === "xl") {
      return css`
        ${tw`h-14 text-font-lg`}
      `;
    }
  }}
`;
