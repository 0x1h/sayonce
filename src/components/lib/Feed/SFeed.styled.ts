import styled from "styled-components";
import tw from "twin.macro";

export const SLoadingCenter = styled.div`
  ${tw`flex items-center justify-center flex-col gap-y-3 h-[calc(100vh - 80px)]`}
`;

export const SWaves = styled.div`
  ${tw`w-full overflow-hidden`}
  svg {
    ${tw`object-cover absolute w-full min-w-[1000px] bottom-0 left-0`}
  }
`;

export const SOkImage = styled.div`
  ${tw`relative z-10 bottom-0 mt-[20%]`}
  img {
    ${tw`relative left-1/2`}
    transform: translate(-50%, -10%);
  }
`;

export const SFeedNoMorePosts = styled.p`
  ${tw`z-10 relative font-extrabold text-4xl text-white text-center pb-10 bottom-0`}
`;
