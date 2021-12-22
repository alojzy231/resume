import styled from 'styled-components';

import { Header4, ParagraphBig } from '../../../styles/typography';

export const AboutMeContainer = styled.section`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint20};
`;
export const AboutMeContentContainer = styled.div`
  margin-bottom: 6.2rem;
  display: flex;

  @media ${({ theme: { medias } }) => medias.tablet} {
    margin: 9.6rem 0 23.8rem;
    flex-direction: column-reverse;
    align-items: center;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin: 2.2rem 0 8%.8rem;
  }
`;

export const AboutMePhoto = styled.img`
  width: 35.8rem;
  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 22.5rem;
  }
`;

export const AboutMeTextContainer = styled.div`
  width: 63.3rem;
  margin-left: 13.6rem;

  @media ${({ theme: { medias } }) => medias.tablet} {
    margin: 0 0 9rem;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 100%;
    padding: 0 4.6rem;
    margin-bottom: 1.5rem;
  }
`;
export const AboutMeTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header4};
    font-weight: 700;
  }
`;
export const AboutMeDescription = styled.h4`
  margin-top: 2.4rem;
  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${ParagraphBig};
  }
`;
