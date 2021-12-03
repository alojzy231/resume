import React, { useRef } from 'react';

import Astronaut from './Astronaut';
import ScrollDownButton from '../../generic/ScrollDownButton';
import {
  HomepageHeroContainer,
  HomepageHeroJobTitle,
  HomepageHeroName,
  Centered,
} from './HomepageHero.styles';

export default function HomepageHero() {
  const ref = useRef();

  return (
    <HomepageHeroContainer ref={ref}>
      <Centered>
        <HomepageHeroName>Damian Kłos</HomepageHeroName>
        <HomepageHeroJobTitle>FRONT-END DEVELOPER</HomepageHeroJobTitle>
      </Centered>
      <ScrollDownButton sectionRef={ref} />
      <Astronaut />
    </HomepageHeroContainer>
  );
}
