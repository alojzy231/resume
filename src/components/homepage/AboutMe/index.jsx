import React, { useRef } from 'react';

import ScrollDownButton from '../../generic/ScrollDownButton';
import { AboutMeContainer } from './AboutMe.styles';

export default function AboutMe() {
  const ref = useRef();
  return (
    <AboutMeContainer ref={ref}>
      test
      <ScrollDownButton sectionRef={ref} />
    </AboutMeContainer>
  );
}
