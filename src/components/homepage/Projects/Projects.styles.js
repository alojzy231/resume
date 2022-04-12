import styled from 'styled-components';

import { Header1, Header3 } from '../../../styles/typography';

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 3rem 0 15rem;

  position: relative;

  background: ${({
    theme: {
      colors: { background },
    },
  }) => background.projectsBackground};

  @media ${({ theme: { medias } }) => medias.mobile} {
    padding-bottom: 6.6rem;
  }
`;

export const ProjectsTitle = styled.h2`
  margin-bottom: 4rem;

  ${Header1};
  text-align: center;

  color: ${({ theme: { colors } }) => colors.white};
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-bottom: 1rem;
    ${Header3};
    font-weight: 800;
  }
`;
