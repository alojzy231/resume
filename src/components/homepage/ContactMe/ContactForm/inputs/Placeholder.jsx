import styled, { css } from 'styled-components';

import { Header6 } from '../../../../../styles/typography';

const inputPlaceholderWhenNotFilled = css`
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const textareaPlaceholderWhenNotFilled = css`
  bottom: calc(100% - 4rem);
  left: 1.5rem;
`;

const placeholderWhenFilled = css`
  bottom: 100%;
  left: 0;
  transform: translateY(-10%);
`;

const placeholderPositon = (isFilled, isTextarea = false) => {
  if (isFilled) {
    return placeholderWhenFilled;
  }

  return isTextarea ? textareaPlaceholderWhenNotFilled : inputPlaceholderWhenNotFilled;
};

const Placeholder = styled.div`
  position: absolute;

  z-index: 0;

  ${Header6};

  color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.darkTint.darkTint10 : colors.darkTint.darkTint05};
  user-select: none;

  transition: ease 0.2s;

  ${({ isFilled, isTextarea }) => placeholderPositon(isFilled, isTextarea)};
`;

export default Placeholder;
