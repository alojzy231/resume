import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '../../../../../clients/contentful/dataMapper';
import {
  ProjectTileContainer,
  ProjectTileImage,
  ProjectTileContent,
  ProjectTileTitle,
  ProjectTileDescription,
  ProjectTileLinksRow,
  ProjectTileDemoLink,
  ProjectTileGithubLink,
  ProjectTileContentTopRow,
  ProjectTileTechnologiesSection,
  ProjectTileTechnology,
} from './ProjectTile.styles';

export default function ProjectTile({ projectData }) {
  const {
    projectName,
    projectDescription,
    projectImage: { url: imageUrl },
    projectDemoLink,
    projectGithubLink,
    usedTechnologies,
  } = projectData;

  const Description = convertRichTextToReactComponent(ProjectTileDescription, projectDescription);
  return (
    <ProjectTileContainer>
      <ProjectTileImage imageUrl={`https:${imageUrl}`} />
      <ProjectTileContent>
        <ProjectTileContentTopRow>
          <ProjectTileTitle>{projectName}</ProjectTileTitle>
          <ProjectTileTechnologiesSection>
            {usedTechnologies.map((technologyName) => (
              <ProjectTileTechnology key={technologyName}>{technologyName}</ProjectTileTechnology>
            ))}
          </ProjectTileTechnologiesSection>
        </ProjectTileContentTopRow>
        {Description}
        <ProjectTileLinksRow>
          <ProjectTileGithubLink href={projectGithubLink} />
          <ProjectTileDemoLink href={projectDemoLink}>Visit demo</ProjectTileDemoLink>
        </ProjectTileLinksRow>
      </ProjectTileContent>
    </ProjectTileContainer>
  );
}

ProjectTile.propTypes = {
  projectData: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.shape({}).isRequired,
    projectImage: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    projectDemoLink: PropTypes.string.isRequired,
    projectGithubLink: PropTypes.string.isRequired,
    usedTechnologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
