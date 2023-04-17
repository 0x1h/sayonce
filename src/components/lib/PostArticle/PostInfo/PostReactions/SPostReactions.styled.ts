import styled from "styled-components";
import tw from "twin.macro";


export const SPostReactions = styled.div`
  ${tw`flex gap-2 flex-wrap pb-7 items-center`}
`;

export const SAddReaction = styled.span`
  ${tw`cursor-pointer mt-1`}
`;

SAddReaction.defaultProps = {
  tabIndex: -1,
};
