import styled from 'styled-components';

import { Header3, Header4 } from '../../../styles/typography';

export const HomepageHeroContainer = styled.header`
  min-height: 100vh;
  position: relative;

  background-color: ${({ theme: { colors } }) => colors.dark};
  overflow: hidden;
`;

export const Centered = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HomepageHeroName = styled.h1`
  margin: 0 2rem;
  z-index: 1;
  color: ${({ theme: { colors } }) => colors.white};

  text-align: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header3};
    font-weight: 800;
  }
`;
export const HomepageHeroJobTitle = styled.h1`
  margin: 5.2rem 2rem 0;
  padding: 2rem;

  z-index: 1;

  color: ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ theme: { colors } }) => colors.white};

  text-align: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header4};
    margin-top: 1.2rem;
    font-weight: 700;
  }
`;
