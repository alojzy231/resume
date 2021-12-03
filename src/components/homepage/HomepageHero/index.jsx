import React from 'react';
import PropTypes from 'prop-types';

import Astronaut from './Astronaut';
import ScrollDownButton from '../../generic/ScrollDownButton';
import {
  HomepageHeroContainer,
  HomepageHeroJobTitle,
  HomepageHeroName,
  Centered,
} from './HomepageHero.styles';

export default function HomepageHero({ homepageHeroRef }) {
  return (
    <HomepageHeroContainer ref={homepageHeroRef}>
      <Centered>
        <HomepageHeroName>Damian Kłos</HomepageHeroName>
        <HomepageHeroJobTitle>FRONT-END DEVELOPER</HomepageHeroJobTitle>
      </Centered>
      <ScrollDownButton sectionRef={homepageHeroRef} />
      <Astronaut />
    </HomepageHeroContainer>
  );
}

HomepageHero.propTypes = {
  homepageHeroRef: PropTypes.shape({}).isRequired,
};
