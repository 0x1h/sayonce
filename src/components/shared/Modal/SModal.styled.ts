import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SModal = styled.div<{ blur?: boolean }>`
  ${tw`fixed z-[999] top-0 left-0 h-screen w-full flex items-center justify-center text-white px-3`}
  ${(props) => {
    if (props.blur) {
      return css`
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(12.9px);
      `;
    }
  }}
`;

export const SModalCard = styled.div<{ width?: number }>`
  ${tw`bg-ragoon rounded-2xl p-3 w-[700px] max-h-[calc(100vh - 200px)] overflow-y-auto`}
  animation-name: PopupAnimation;
  animation-duration: 0.5s;

  ${(props) => {
    if (props.width) {
      return css`
        width: ${props.width}px !important;
      `;
    }
  }}

  @keyframes PopupAnimation {
    from {
      scale: 0.95;
      transform: translateY(10px);
    }
    to {
      scale: 1;
      transform: translateY(0px);
    }
  }
`;

export const SModalBody = styled.div`
  ${tw`overflow-y-auto py-3`}
`;

export const SModalFooter = styled.footer`
  ${tw`flex justify-between`}
  button {
    ${tw`w-full`}
  }
`;
