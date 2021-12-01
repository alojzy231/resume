import React, { useRef } from 'react';

import Astronaut from './Astronaut';
import {
  HomepageHeroContainer,
  HomepageHeroJobTitle,
  HomepageHeroName,
  HeroScrollDownButton,
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
      <HeroScrollDownButton sectionRef={ref} />
      <Astronaut />
    </HomepageHeroContainer>
  );
}
