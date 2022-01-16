import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '../../../../../clients/contentful/dataMapper';
import {
  ProjectTileContainer,
  ProjectTileImage,
  ProjectTileContent,
  ProjectTileTitle,
  ProjectTileDescription,
  ProjectTileLink,
  ProjectTileContentTopRow,
  ProjectTileTechnologiesSection,
  ProjectTileTechnology,
} from './ProjectTile.styles';

export default function ProjectTile({ projectData }) {
  const {
    projectName,
    projectDescription,
    projectImage: { url: imageUrl },
    projectLink,
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
        <ProjectTileLink href={projectLink}>Visit project</ProjectTileLink>
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
    projectLink: PropTypes.string.isRequired,
    usedTechnologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
