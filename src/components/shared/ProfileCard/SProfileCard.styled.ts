import styled from "styled-components";
import tw from "twin.macro";

export const SProfileCard = styled.div`
  ${tw`p-3 rounded-2xl gap-3 h-[calc(100vh - 90px)] relative app-max-width-small:h-auto app-max-width-small:mb-5 app-max-width-small:flex app-max-width-small:items-center`}
  @media screen and (max-width: 768px){
    ::before{
      ${tw`content-[''] w-full h-px bg-white/20 absolute bottom-0 left-0`}
      transform: translateY(20px);
    }
  }
`;

export const SProfileAvatar = styled.div`
  ${tw`rounded-full border-8 max-w-[200px] max-h-[200px] border-blue border-solid overflow-hidden app-max-width-small:border-4 app-max-width-small:max-w-[150px] app-max-width-small:max-h-[150px]`}
  img {
    ${tw`w-full`}
  }
`;

export const SProfileInfo = styled.div`
  ${tw`mt-3 app-max-width-small:ml-3`}
`;

export const SProfileInfoName = styled.h3`
  ${tw`text-white text-4xl font-extrabold app-max-width-small:text-3xl`}
`;

export const SProfileDate = styled.time`
  ${tw`flex whitespace-nowrap gap-x-1`}
`;

export const SProfileDateWrapper = styled.div`
  ${tw`text-white/60 flex items-center gap-1 cursor-default`}
`;
