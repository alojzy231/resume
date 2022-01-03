import styled from 'styled-components';

import { Header6 } from '../../../../../../styles/typography';

export const InputContainer = styled.div`
  height: 3.7rem;
  width: 31rem;

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

  color: ${({ theme: { colors } }) => colors.darkTint.darkTint05};

  background-color: transparent;
  border-radius: 1.9rem;

  border-color: ${({ theme: { colors } }) => colors.darkTint.darkTint05};
  border-width: 0.4rem;
  border-style: solid;

  outline: none;

  &:focus {
    color: ${({ theme: { colors } }) => colors.white};

    border-color: ${({ theme: { colors } }) => colors.white};
  }
`;
