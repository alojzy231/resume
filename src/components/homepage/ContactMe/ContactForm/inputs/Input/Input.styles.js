import styled from 'styled-components';

import { Header6, ParagraphBig } from '../../../../../../styles/typography';

export const InputContainer = styled.div`
  height: 3.7rem;
  width: 31rem;

  margin-top: 4rem;

  position: relative;

  @media ${({ theme: { medias } }) => medias.mobile} {
    height: 3.2rem;
    width: 18.1rem;
  }
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  padding: 1rem;

  position: relative;
  z-index: 1;

  ${Header6};

  color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.darkTint.darkTint10 : colors.darkTint.darkTint05};

  background-color: transparent;
  border-radius: 1.9rem;

  border-color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.darkTint.darkTint10 : colors.darkTint.darkTint05};
  border-width: 0.4rem;
  border-style: solid;

  outline: none;

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
