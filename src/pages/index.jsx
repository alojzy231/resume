import React from 'react';

import HomepageHero from '../components/homepage/HomepageHero';

import HomepageContainer from '../components/homepage/Homepage.styles';
import AboutMe from '../components/homepage/AboutMe';
import Technologies from '../components/homepage/Technologies';
import Projects from '../components/homepage/Projects';
import ContactMe from '../components/homepage/ContactMe';

export default function Homepage() {
  return (
    <HomepageContainer>
      <HomepageHero />
      <AboutMe />
      <Technologies />
      <Projects />
      <ContactMe />
    </HomepageContainer>
  );
}
