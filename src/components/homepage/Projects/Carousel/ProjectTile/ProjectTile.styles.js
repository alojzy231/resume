import styled from 'styled-components';

import { Header4, Header5, ParagraphBig, ParagraphSmall } from '../../../../../styles/typography';
import ProjectTileGithubIcon from './ProjectTileGithubIcon';

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

export const ProjectTileTitle = styled.h3`
  @media ${({ theme: { medias } }) => medias.tablet} {
    margin-right: auto;
    ${Header4};
    font-weight: 600;
  }
`;
export const ProjectTileTechnologiesSection = styled.div`
  width: 100%;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
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
    ${Header5};
  }
`;

export const ProjectTileLinksRow = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectTileDemoLink = styled.a`
  width: fit-content;
  height: 5.3rem;

  padding: 1rem 1.5rem;

  display: block;

  ${Header5};
  color: ${({ theme: { colors } }) => colors.white};
  text-decoration: none;
  border-radius: 2.65rem;

  background-color: ${({ theme: { colors } }) => colors.darkTint.darkTint20};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media ${({ theme: { medias } }) => medias.tablet} {
    height: 4.2rem;
    border-radius: 2.1rem;

    ${ParagraphBig};
  }
`;

export const ProjectTileGithubLink = styled(ProjectTileGithubIcon)`
  width: 6.4rem;
  height: 6.4rem;

  & svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media ${({ theme: { medias } }) => medias.tablet} {
    width: 4.8rem;
    height: 4.8rem;
  }
`;
