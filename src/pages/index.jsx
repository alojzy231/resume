import React, { useRef } from 'react';

import ScrollUpButton from '../components/generic/ScrollUpButton';
import HomepageHero from '../components/homepage/HomepageHero';
import AboutMe from '../components/homepage/AboutMe';
import Technologies from '../components/homepage/Technologies';
import Projects from '../components/homepage/Projects';
import ContactMe from '../components/homepage/ContactMe';
import HomepageContainer from '../components/homepage/Homepage.styles';

export default function Homepage() {
  const homepageHeroRef = useRef();
  return (
    <HomepageContainer>
      <ScrollUpButton homepageHeroRef={homepageHeroRef} />
      <HomepageHero homepageHeroRef={homepageHeroRef} />
      <AboutMe />
      <Technologies />
      <Projects />
      <ContactMe />
    </HomepageContainer>
  );
}
