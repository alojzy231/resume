import styled from 'styled-components';

import { Header4, ParagraphBig } from '../../../styles/typography';

export const ContactMeContainer = styled.section`
  min-height: 100vh;
  padding: 0 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme: { colors } }) => colors.darkTint.darkTint20};

  border-style: solid;
  border-width: 2rem;
  border-image: ${({ theme: { colors } }) => colors.gradient} 1;

  @media ${({ theme: { medias } }) => medias.mobile} {
    flex-direction: column;
  }
`;

export const ContactMeTextContent = styled.div`
  width: 70rem;
  margin-right: 4.8rem;

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: 24.8rem;
    margin-right: 0;
  }
`;

export const ContactMeTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header4};
    font-weight: 700;
  }
`;

export const ContactMeDescription = styled.h4`
  margin-top: 1.6rem;
  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${ParagraphBig};
  }
`;
