import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import ScrollUpButton from '../components/generic/ScrollUpButton';
import HomepageHero from '../components/homepage/HomepageHero';
import AboutMe from '../components/homepage/AboutMe';
import Technologies from '../components/homepage/Technologies';
import Projects from '../components/homepage/Projects';
import ContactMe from '../components/homepage/ContactMe';
import HomepageContainer from '../components/homepage/Homepage.styles';
import getPagesData from '../clients/contentful/getPageData';
import mapData from '../clients/contentful/dataMapper';

export async function getStaticProps() {
  const resJson = await getPagesData();
  const pageData = mapData(resJson);

  return {
    props: {
      pageData: { aboutMeSectionData: pageData.aboutMe[0] },
    },
  };
}

export default function Homepage({ pageData: { aboutMeSectionData } }) {
  const homepageHeroRef = useRef();
  return (
    <HomepageContainer>
      <ScrollUpButton homepageHeroRef={homepageHeroRef} />
      <HomepageHero homepageHeroRef={homepageHeroRef} />
      <AboutMe data={aboutMeSectionData} />
      <Technologies />
      <Projects />
      <ContactMe />
    </HomepageContainer>
  );
}

Homepage.propTypes = {
  pageData: PropTypes.shape({
    aboutMeSectionData: PropTypes.shape({}).isRequired,
  }).isRequired,
};
