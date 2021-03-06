import styled from 'styled-components';

import { Header6, ParagraphBig } from '../../../../../../styles/typography';

export const TextareaContainer = styled.div`
  height: 36.5rem;
  width: 100%;

  margin-top: 4rem;

  position: relative;
`;

export const StyledTextarea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 1rem;

  position: relative;
  z-index: 1;

  font-family: inherit;
  ${Header6};

  color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.darkTint.darkTint10 : colors.darkTint.darkTint05};

  background-color: transparent;
  border-radius: 1.9rem;

  border-color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.darkTint.darkTint10 : colors.darkTint.darkTint05};
  border-width: 0.4rem;
  border-style: solid;

  ${({ isInvalid, theme: { colors } }) => isInvalid && ` border-color: ${colors.error}`};

  outline: none;

  resize: none;

  &:focus {
    color: ${({ theme: { colors } }) => colors.white};

    border-color: ${({ theme: { colors } }) => colors.white};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${({ disabled, theme: { colors } }) =>
      disabled ? colors.darkTint.darkTint10 : colors.darkTint.darkTint05} !important;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${ParagraphBig};
  }
`;
