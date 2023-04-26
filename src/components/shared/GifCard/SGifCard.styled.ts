import styled from "styled-components";
import tw from "twin.macro";

export const Card = styled.div`
  ${tw`w-full`}
  img {
    ${tw`rounded-xl transition-all`}
  }
  :active {
    img {
      ${tw`scale-95`}
    }
  }
`;

export const CardImage = styled.div`
  ${tw`w-full h-full`}
  img {
    ${tw`w-full h-full`}
  }
`;
