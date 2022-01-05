import styled from 'styled-components';

import { Header3, Header4, Header5, ParagraphBig } from '../../../styles/typography';

export const ContactMeContainer = styled.section`
  min-height: 100vh;
  padding: 2rem 3rem 9.7rem;

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
    min-width: 24.8rem;
    width: 80%;
    margin: 2rem 0;
  }
`;

export const ContactMeTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.tablet} {
    ${Header3};
    font-weight: 700;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header4};
    font-weight: 700;
  }
`;

export const ContactMeDescription = styled.h4`
  margin-top: 1.6rem;
  color: ${({ theme: { colors } }) => colors.white};

  @media ${({ theme: { medias } }) => medias.tablet} {
    ${Header5};
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    ${ParagraphBig};
  }
`;
