import styled from 'styled-components';

import { Header1, Header3, Header4 } from '../../../styles/typography';

export const HomepageHeroContainer = styled.header`
  min-height: 100vh;
  padding-bottom: 15rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme: { colors } }) => colors.dark};
  overflow: hidden;

  @media ${({ theme: { medias } }) => medias.mobile} {
    padding-bottom: 6.6rem;
  }
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
export const HomepageHeroJobTitle = styled.h2`
  margin: 5.2rem 2rem 0;
  padding: 2rem;

  z-index: 1;

  ${Header1};

  color: ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ theme: { colors } }) => colors.white};

  text-align: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header4};
    margin-top: 1.2rem;
    font-weight: 800;
  }
`;
