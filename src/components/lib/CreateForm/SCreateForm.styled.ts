import styled, { css } from "styled-components";
import tw from "twin.macro";
import { errorMessage } from "./utils/errorMessage.utils";

export const SCreateForm = styled.form`
  ${tw`mt-12 pb-9`}
  .nextui-input-main-container {
    ${tw`mt-8!`}
  }
  .nextui-input-helper-text {
    ${tw`text-xs text-[#f4256d]`}
  }
`;

export const SText = styled.p<{
  errorMessage?: boolean;
  b?: boolean;
  huge?: boolean;
}>`
  ${tw`text-xs`}
  ${(props) => {
    if (props.errorMessage) {
      return css`
        ${tw`text-[#f4256d]`}
      `;
    }
    if (props.b) {
      return css`
        ${tw`font-extrabold!`}
      `;
    }
  }}
`;

export const SCreateWrapper = styled.div`
  ${tw`max-w-3xl mx-auto flex flex-col gap-y-6`}
  .nextui-input-main-container {
    ${tw`mt-3`}
  }
`;

export const SCardWrapper = styled.div<{ error?: boolean }>`
  button {
    ${tw`w-full`};
  }
  .gif-card {
    ${(props) => {
      if (props.error) {
        return css`
          ${tw`bg-[#300313]`}
          b {
            ${tw`text-[#f4256d]`}
          }
        `;
      }
    }}
  }
`;

export const STextCenter = styled.div`
  ${tw`flex mt-4 justify-center`}
  b {
    ${tw`text-[#737373]`}
  }
`;

export const SLoadingScreen = styled.div`
  ${tw`h-[calc(100vh - 80px)] flex justify-center text-center flex-col gap-y-3`}
`;

export const SGifCard = styled.div<{ errorMessage?: boolean }>`
  ${tw`bg-ragoon p-3 rounded-2xl transition-all active:scale-95`}
  ${(props) => {
    if (props.errorMessage) {
      return css`
        ${tw`bg-[#300313]! text-[#f4256d]`}
      `;
    }
  }}
`;
