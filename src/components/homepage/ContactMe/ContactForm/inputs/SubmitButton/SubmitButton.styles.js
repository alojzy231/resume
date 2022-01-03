import styled, { css } from 'styled-components';
import { Header5, ParagraphBig } from '../../../../../../styles/typography';

const defaultButton = css`
  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint05};
`;
const loadingButton = css`
  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint10};
`;
const successButton = css`
  background-color: ${({ theme: { colors } }) => colors.success};
`;
const errorButton = css`
  background-color: ${({ theme: { colors } }) => colors.error};
`;

const selectSubmitButtonStyling = (state) => {
  switch (state) {
    case 'loading':
      return loadingButton;
    case 'success':
      return successButton;
    case 'error':
      return errorButton;
    default:
      return defaultButton;
  }
};

const StyledSubmitButton = styled.button`
  height: 4.2rem;
  width: fit-content;
  margin-left: auto;
  padding: 0.5rem 3.1rem;

  ${Header5};
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};

  ${({ state }) => selectSubmitButtonStyling(state)};

  border-radius: 2rem;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    height: 3.2rem;
    padding: 0.125rem 2.4rem;

    ${ParagraphBig};
    font-weight: 700;
  }
`;

export default StyledSubmitButton;
