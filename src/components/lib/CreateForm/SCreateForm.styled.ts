import styled from "styled-components";
import tw from "twin.macro";

export const SCreateForm = styled.form`
    ${tw`mt-12`}
`

export const SCreateWrapper = styled.div`
    ${tw`max-w-3xl mx-auto`}
    .nextui-input-main-container {
        ${tw`mt-3`}
    }
`

export const SCardWrapper = styled.div`
    ${tw`mt-3`}
    button {
        ${tw`w-full`};
    }
`

export const STextCenter = styled.div`
    ${tw`flex mt-4 justify-center`}
    b {
        ${tw`text-[#737373]`}
    }
`