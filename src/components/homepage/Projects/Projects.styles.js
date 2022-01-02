import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding-bottom: 15rem;

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

export const ProjectsTitle = styled.h1``;
