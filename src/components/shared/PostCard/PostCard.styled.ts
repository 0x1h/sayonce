import { Text } from "@nextui-org/react";
import styled from "styled-components";
import tw from "twin.macro";

export const SPostCard = styled.div`
    ${tw`overflow-hidden rounded-xl w-full h-64`}
`

export const SText = styled(Text)`
    ${tw`w-full overflow-hidden`}
    text-overflow: ellipsis;
    white-space: nowrap;
`