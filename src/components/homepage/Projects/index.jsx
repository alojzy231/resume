import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Carousel from './Carousel';
import ScrollDownButton from '../../generic/ScrollDownButton';
import { ProjectsContainer, ProjectsTitle } from './Projects.styles';

export default function Projects({ projects }) {
  const ref = useRef();
  return (
    <ProjectsContainer id="projects" ref={ref}>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Carousel projects={projects} />
      <ScrollDownButton sectionRef={ref} />
    </ProjectsContainer>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
