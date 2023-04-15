import { Text } from "@nextui-org/react";
import styled from "styled-components";
import tw from "twin.macro";

export const SPostCard = styled.div`
  ${tw`overflow-hidden rounded-xl w-full h-64 relative`}
  img {
    ${tw`absolute left-1/2 top-1/2`}
    transform: translate(-50%, -50%);
  }
`;

export const SText = styled(Text)`
  ${tw`overflow-hidden text-ellipsis whitespace-nowrap`}
`;
