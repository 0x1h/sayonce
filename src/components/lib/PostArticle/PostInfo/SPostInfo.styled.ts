import styled from "styled-components";
import tw from "twin.macro";

export const SPostInfo = styled.article`
  ${tw`w-full`}
`;

export const SPostInfoTitle = styled.h1`
  ${tw`font-extrabold text-6xl font-poppins max-w-2xl overflow-hidden`}
`;

export const SPostInfoDescription = styled.p`
  ${tw`max-w-4xl mt-12 overflow-hidden`}
`;


export const SPostDate = styled.time`
  ${tw`text-white/60 cursor-default relative top-6`}
`