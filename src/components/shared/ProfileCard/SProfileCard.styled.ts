import styled from "styled-components";
import tw from "twin.macro";


export const SProfileCard = styled.div`
  ${tw`p-3 rounded-2xl gap-3 h-[calc(100vh - 90px)]`}
`

export const SProfileAvatar = styled.div`
  ${tw`rounded-full border-8 w-[200px] h-[200px] border-blue border-solid overflow-hidden`}
  img {
    ${tw`w-full`}
  }
`

export const SProfileInfo = styled.div`
  ${tw`mt-3`}
`

export const SProfileInfoName = styled.h3`
  ${tw`text-white text-4xl font-extrabold `}
`

export const SProfileDate = styled.time`
  ${tw``}
`

export const SProfileDateWrapper = styled.div`
  ${tw`text-white/60 flex items-center gap-1 cursor-default`}
`