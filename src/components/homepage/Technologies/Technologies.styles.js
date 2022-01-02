import styled from 'styled-components';

export const TechnologiesContainer = styled.section`
  min-height: 100vh;
  padding-bottom: 15rem;

  position: relative;

  background: ${({
    theme: {
      colors: { background },
    },
  }) => background.technologiesBackground};

  @media ${({ theme: { medias } }) => medias.mobile} {
    padding-bottom: 6.6rem;
  }
`;

export const TechnologiesTitle = styled.h1``;
