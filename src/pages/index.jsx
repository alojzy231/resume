import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import ScrollUpButton from '../components/generic/ScrollUpButton';
import HomepageHero from '../components/homepage/HomepageHero';
import AboutMe from '../components/homepage/AboutMe';
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
      pageData: {
        aboutMeSectionData: pageData.aboutMe[0],
        projects: pageData.projects,
        contactMeData: pageData.contact[0],
      },
    },
  };
}

export default function Homepage({ pageData: { aboutMeSectionData, projects, contactMeData } }) {
  const homepageHeroRef = useRef();
  return (
    <HomepageContainer>
      <ScrollUpButton homepageHeroRef={homepageHeroRef} />
      <HomepageHero homepageHeroRef={homepageHeroRef} />
      <AboutMe data={aboutMeSectionData} />
      <Projects projects={projects} />
      <ContactMe data={contactMeData} />
    </HomepageContainer>
  );
}

Homepage.propTypes = {
  pageData: PropTypes.shape({
    aboutMeSectionData: PropTypes.shape({}).isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    contactMeData: PropTypes.shape({}).isRequired,
  }).isRequired,
};
