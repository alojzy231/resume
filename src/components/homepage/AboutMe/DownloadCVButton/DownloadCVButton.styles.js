import styled from 'styled-components';

import { ParagraphBig } from '../../../../styles/typography';

export const DownloadCVButtonContainer = styled.a`
  width: 30rem;
  margin: 4rem auto 0;

  padding: 0.8rem 1.6rem;

  display: block;

  background-color: ${({ theme: { colors } }) => colors.dark};
  border-radius: 3.2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 14rem;
    margin-top: 1.6rem;
  }
`;

export const DownloadCVButtonText = styled.h4`
  color: ${({ theme: { colors } }) => colors.white};
  text-decoration: none;

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${ParagraphBig}
  }
`;
