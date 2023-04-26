import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SNavbar = styled.nav<{ justify?: boolean }>`
  ${tw`bg-black w-full h-24 top-0 left-0 flex items-center relative justify-between z-30`}
  *:focus {
    border: none;
  }
  .hamburger-react{
    :focus {
      border: none;
    }
  }
`;

export const SNavbarLi = styled.li<{ active?: boolean }>`
  ${tw`text-[#535353] list-none`};
  color: ${(props) => props.active && "#0070f1"};

  :hover {
    ${tw`underline text-white`}
    color: ${(props) => props.active && "#0070f1"};
  }
`;

export const SNavbarGoShop = styled.span`
  ${tw`flex items-center`}
  :hover {
    ${tw`underline`}
  }
`;
