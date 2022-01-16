import React, { useRef } from 'react';

import Carousel from './Carousel';
import ScrollDownButton from '../../generic/ScrollDownButton';
import { ProjectsContainer } from './Projects.styles';

export default function Projects() {
  const ref = useRef();
  return (
    <ProjectsContainer id="projects" ref={ref}>
      <Carousel />
      <ScrollDownButton sectionRef={ref} />
    </ProjectsContainer>
  );
}
