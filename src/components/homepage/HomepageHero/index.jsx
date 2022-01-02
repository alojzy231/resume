import React from 'react';
import PropTypes from 'prop-types';

import Astronaut from './Astronaut';
import ScrollDownButton from '../../generic/ScrollDownButton';
import {
  HomepageHeroContainer,
  HomepageHeroJobTitle,
  HomepageHeroName,
} from './HomepageHero.styles';

export default function HomepageHero({ homepageHeroRef }) {
  return (
    <HomepageHeroContainer id="hero" ref={homepageHeroRef}>
      <HomepageHeroName>Damian Kłos</HomepageHeroName>
      <HomepageHeroJobTitle>FRONT-END DEVELOPER</HomepageHeroJobTitle>
      <ScrollDownButton sectionRef={homepageHeroRef} />
      <Astronaut />
    </HomepageHeroContainer>
  );
}

HomepageHero.propTypes = {
  homepageHeroRef: PropTypes.shape({}).isRequired,
};
