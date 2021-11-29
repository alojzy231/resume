import styled from 'styled-components';

export const HomepageHeroContainer = styled.header`
  min-height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background-color: ${({ theme: { colors } }) => colors.dark};
`;
export const HomepageHeroName = styled.h1`
  z-index: 1;
  color: ${({ theme: { colors } }) => colors.white};
`;
export const HomepageHeroJobTitle = styled.h1`
  margin-top: 5.2rem;
  padding: 2rem;

  z-index: 1;

  color: ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ theme: { colors } }) => colors.white};
`;
