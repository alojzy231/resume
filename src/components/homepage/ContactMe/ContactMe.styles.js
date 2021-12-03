import styled from 'styled-components';

export const ContactMeContainer = styled.section`
  min-height: 100vh;

  background: ${({ theme: { colors } }) => colors.darkTint.darkTint20};

  border-style: solid;
  border-width: 2rem;
  border-image: ${({ theme: { colors } }) => colors.gradient} 1;
`;

export const ContactMeTitle = styled.h1``;
