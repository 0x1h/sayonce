import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SMenu = styled.div<{ open?: boolean }>`
  ${tw`fixed top-10 left-0 h-screen bg-black w-full z-20 transition-all`}
  transform: translateX(100%);
  ${({ open }) => {
    if (open) {
      return css`
        transform: translateX(0%);
      `;
    }
  }}
`;

export const SMenuUl = styled.ul`
  ${tw`flex flex-col items-center gap-y-7 justify-center mt-[110px]`}
`;

export const SMenuLi = styled.li<{ active: boolean }>`
  ${tw`text-[#535353] text-xl`};
  color: ${(props) => props.active && "#0ABAB5"};

  :hover {
    ${tw`underline text-white`}
    color: ${(props) => props.active && "#0ABAB5"};
  }
`;
