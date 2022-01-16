import styled from 'styled-components';

import { Header2 } from '../../../styles/typography';

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

export const ProjectsTitle = styled.h1`
  margin-bottom: 4rem;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: center;
  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-bottom: 1rem;
    ${Header2};
    font-weight: 800;
  }
`;
