import styled from 'styled-components';

import { Header1, Header3, ParagraphBig } from '../../../styles/typography';

export const AboutMeContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  padding-bottom: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: ${({
    theme: {
      colors: { background },
    },
  }) => background.aboutMeBackground};
  @media ${({ theme: { medias } }) => medias.tablet} {
    padding-bottom: 0;
  }
  @media ${({ theme: { medias } }) => medias.mobile} {
    padding-bottom: 6.6rem;
  }
`;
export const AboutMeContentContainer = styled.div`
  display: flex;
  align-items: center;

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
  height: 44.8rem;
  width: 35.8rem;
  @media ${({ theme: { medias } }) => medias.mobile} {
    height: 28.1rem;
    width: 22.5rem;
  }
`;

export const AboutMeLeftContent = styled.div`
  position: relative;
`;

export const AboutMeTextContainer = styled.div`
  width: 66.1rem;
  margin-left: 8rem;

  @media ${({ theme: { medias } }) => medias.tablet} {
    margin: 0 0 9rem;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 100%;
    padding: 0 4.6rem;
    margin-bottom: 1.5rem;
  }
`;
export const AboutMeTitle = styled.h2`
  ${Header1};

  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header3};
    font-weight: 800;
  }
`;
export const AboutMeDescription = styled.h4`
  margin-top: 2.4rem;
  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${ParagraphBig};
  }
`;
