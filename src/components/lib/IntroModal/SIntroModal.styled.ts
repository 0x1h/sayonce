import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

export const SIntroModalH1 = styled.h1`
  ${tw`text-2xl mt-2 font-extrabold`}
`;

export const SintroModalH4 = styled.h4`
  ${tw`mt-3`}
`;

export const SIntroImageWrapper = styled.div`
  overflow: hidden;
`

export const SintroModalP = styled.p`
  ${tw`ml-2`}
`;

export const SIntroModalImage = styled(Image)`
  ${tw`rounded-2xl`}
`;

SIntroModalImage.defaultProps = {
  width: 800,
  height: 400,
  draggable: "false",
};
