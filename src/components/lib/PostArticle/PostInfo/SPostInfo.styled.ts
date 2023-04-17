import styled from "styled-components";
import tw from "twin.macro";

export const SPostInfo = styled.article`
  ${tw`w-full`}
`;

export const SPostInfoTitle = styled.h1`
  ${tw`font-extrabold text-6xl font-poppins max-w-2xl overflow-hidden app-max-width-small:mt-3 [line-height: normal] app-max-width-small:text-4xl`}
`;

export const SPostInfoDescription = styled.p`
  ${tw`max-w-4xl mt-12 overflow-hidden app-max-width-small:mt-6 app-max-width-small:text-[14px]`}
`;

export const SPostDate = styled.time`
  ${tw`text-white/60 cursor-default relative`}
`;

export const SImageGif = styled.div`
  ${tw`max-w-[400px] overflow-hidden rounded-2xl my-8`}
`;

export const SUnAuthorizedWarn = styled.div`
  ${tw`text-[#ffcf4d] text-xs mb-1`}
`;
