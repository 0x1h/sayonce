import styled, { css } from "styled-components";
import tw from "twin.macro";

type SLoadingProps = {
  color?: "white" | "blue"
  size?: "xs" | "xl" 
}

export const SLoading = styled.div<SLoadingProps>`
  ${tw`text-blue inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent`}
  ${props => {
    if(props.color === 'white'){
      return css`
        ${tw`text-white`}
      `
    }
  }}
    ${props => {
    if(props.size === "xs"){
      return css`
        ${tw`h-5 w-5 border-[2px]`}
      `
    }
    if(props.size === "xl"){
      return css`
        ${tw`h-10 w-10 border-[5px]`}
      `
    }
  }}
`;

SLoading.defaultProps = {
  role: "status",
  "aria-label": "loading",
};
