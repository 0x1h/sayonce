import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SCreateForm = styled.form`
  ${tw`mt-12 pb-9`}
  .nextui-input-main-container {
    ${tw`mt-8!`}
  }
  .nextui-input-helper-text {
    ${tw`text-xs text-[#f4256d]`}
  }
`;

export const SCreateWrapper = styled.div`
  ${tw`max-w-3xl mx-auto`}
  .nextui-input-main-container {
    ${tw`mt-3`}
  }
`;

export const SCardWrapper = styled.div<{ error?: boolean }>`
  ${tw`mt-8`}
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
