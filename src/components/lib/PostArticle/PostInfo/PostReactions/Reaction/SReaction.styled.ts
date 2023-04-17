import styled, { css } from "styled-components";
import tw from "twin.macro";

export const SReaction = styled.span<{ includesMe?: boolean }>`
  ${tw`px-3 py-1 bg-white/10 rounded-xl flex items-center cursor-pointer gap-x-2 font-poppins font-extrabold transition-all`}
  ${(props) => {
    if (props.includesMe) {
      return css`
        ${tw`bg-blue/20`}
        :hover {
          ${tw`bg-blue/30!`}
        }
      `;
    }
  }}
  :hover {
    ${tw`bg-white/20`}
  }
  .emoji {
    ${tw`w-5`}
    transform: translateY(2px);
  }
`;

export const SReationsTotal = styled.p`
  ${tw``}
`;

SReaction.defaultProps = {
  tabIndex: -1,
  role: 'button'
};
