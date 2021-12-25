import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  min-height: 100vh;

  position: relative;

  background: ${({
    theme: {
      colors: { background },
    },
  }) => background.projectsBackground};
`;

export const ProjectsTitle = styled.h1``;
