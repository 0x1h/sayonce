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
    ${tw`bg-background`}
  }
`;
