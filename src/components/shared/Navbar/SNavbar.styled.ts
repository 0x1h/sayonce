import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SNavbar = styled.nav<{ justify?: boolean }>`
  ${tw`bg-black w-full h-24 top-0 left-0 flex items-center relative`}
  ${({ justify }) => {
    if (justify) {
      return css`
        ${tw`justify-between z-30`}
      `;
    }
  }}
`;

export const SNavbarLi = styled.li<{ active?: boolean }>`
  ${tw`text-[#535353]`};
  color: ${(props) => props.active && "#0ABAB5"};

  :hover {
    ${tw`underline text-white`}
    color: ${(props) => props.active && "#0ABAB5"};
  }
`;

export const SNavbarGoShop = styled.span`
  ${tw`flex items-center`}
  :hover {
    ${tw`underline`}
  }
`;
