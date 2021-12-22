import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '../../../clients/contentful/dataMapper';
import ScrollDownButton from '../../generic/ScrollDownButton';
import {
  AboutMeContainer,
  AboutMeContentContainer,
  AboutMePhoto,
  AboutMeTextContainer,
  AboutMeTitle,
  AboutMeDescription,
} from './AboutMe.styles';

export default function AboutMe({ data }) {
  const ref = useRef();
  const { aboutMeTitle: title, aboutMeDescription, aboutMePhoto: photo } = data;
  const Description = convertRichTextToReactComponent(AboutMeDescription, aboutMeDescription);

  return (
    <AboutMeContainer id="about-me" ref={ref}>
      <AboutMeContentContainer>
        <AboutMePhoto src={`https:${photo.url}`} layout="fixed" alt={photo.title} />
        <AboutMeTextContainer>
          <AboutMeTitle>{title}</AboutMeTitle>
          {Description}
        </AboutMeTextContainer>
      </AboutMeContentContainer>
      <ScrollDownButton sectionRef={ref} />
    </AboutMeContainer>
  );
}

AboutMe.propTypes = {
  data: PropTypes.shape({
    aboutMeTitle: PropTypes.string,
    aboutMeDescription: PropTypes.shape({}).isRequired,
    aboutMePhoto: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
