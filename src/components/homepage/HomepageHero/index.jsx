import React from 'react';

import Astronaut from './Astronaut';
import {
  HomepageHeroContainer,
  HomepageHeroJobTitle,
  HomepageHeroName,
} from './HomepageHero.styles';

export default function HomepageHero() {
  return (
    <HomepageHeroContainer>
      <HomepageHeroName>Damian Kłos</HomepageHeroName>
      <HomepageHeroJobTitle>FRONT-END DEVELOPER</HomepageHeroJobTitle>
      <Astronaut />
    </HomepageHeroContainer>
  );
}
