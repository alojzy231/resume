import styled from 'styled-components';
import { Header4, Header6, ParagraphBig, ParagraphSmall } from '../../../../../styles/typography';

export const ProjectTileContainer = styled.div`
  margin: 3.2rem 12.8rem 6.4rem;
  padding-bottom: 3rem;
  background-color: white;

  border-radius: 6.4rem;
  user-select: none;

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin: 3.2rem 1.2rem;
  }
`;
export const ProjectTileImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 8;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    url(${({ imageUrl }) => imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 6.4rem 6.4rem 0 0;
`;

export const ProjectTileContent = styled.div`
  margin: 0 3.2rem;
`;

export const ProjectTileContentTopRow = styled.div`
  display: flex;
  align-items: flex-end;

  @media ${({ theme: { medias } }) => medias.mobile} {
    flex-direction: column;
  }
`;
export const ProjectTileTitle = styled.h3`
  @media ${({ theme: { medias } }) => medias.tablet} {
    margin-right: auto;
    ${Header4};
    font-weight: 600;
  }
`;
export const ProjectTileTechnologiesSection = styled.div`
  width: 40%;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media ${({ theme: { medias } }) => medias.mobile} {
    width: auto;
    justify-content: flex-start;
  }
`;
export const ProjectTileTechnology = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  ${ParagraphBig};
  border-radius: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint05};

  @media ${({ theme: { medias } }) => medias.tablet} {
    ${ParagraphSmall};
  }
`;
export const ProjectTileDescription = styled.h5`
  @media ${({ theme: { medias } }) => medias.tablet} {
    ${Header6};
  }
`;
export const ProjectTileLink = styled.a`
  width: fit-content;
  margin: 2rem 0 0 auto;
  padding: 1rem;

  display: block;

  ${Header6};
  color: ${({ theme: { colors } }) => colors.white};
  text-decoration: none;
  border-radius: 1.6rem;

  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint20};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media ${({ theme: { medias } }) => medias.tablet} {
    ${ParagraphBig};
  }
`;
