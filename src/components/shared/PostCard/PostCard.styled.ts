import styled from "styled-components";
import tw from "twin.macro";

export const SCard = styled.div`
  ${tw`bg-ragoon rounded-2xl px-3 py-5 flex w-full flex-col active:scale-95 transition-all`}
`;

export const SPostCard = styled.div`
  ${tw`overflow-hidden rounded-xl h-80 relative`}
  img {
    ${tw`absolute left-1/2 top-1/2 w-full h-full`}
    transform: translate(-50%, -50%);
  }
`;

export const SText = styled.p`
  ${tw`overflow-hidden text-ellipsis max-h-16 whitespace-nowrap font-bold text-white`}
`;

export const SFooter = styled.footer`
  ${tw`mt-3 flex items-center justify-between justify-items-start`}
`;

SCard.defaultProps = {
  tabIndex: 0,
};
