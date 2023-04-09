import { Text } from "@nextui-org/react";
import styled from "styled-components";
import tw from "twin.macro";

export const SNavbarLayout = styled.div`
  .nextui-navbar-container {
    ${tw`bg-transparent border-0`}
  }
  .nextui-navbar-collapse-wrapper {
    ${tw`bg-transparent backdrop-blur-0`}
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .nextui-navbar-collapse {
    ${tw`bg-[#000]`}
  }
`;

export const STextAuthorize = styled(Text)`
  ${tw`flex items-center`}
  svg {
    ${tw`mr-2`}
  }
`

STextAuthorize.defaultProps = {
  b: true,
}