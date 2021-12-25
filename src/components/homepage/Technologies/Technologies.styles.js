import styled from 'styled-components';

export const TechnologiesContainer = styled.section`
  min-height: 100vh;

  position: relative;

  background: ${({
    theme: {
      colors: { background },
    },
  }) => background.technologiesBackground};
`;

export const TechnologiesTitle = styled.h1``;
