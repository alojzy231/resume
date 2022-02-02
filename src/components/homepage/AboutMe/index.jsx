import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '../../../clients/contentful/dataMapper';
import ScrollDownButton from '../../generic/ScrollDownButton';
import {
  AboutMeContainer,
  AboutMeContentContainer,
  AboutMeLeftContent,
  AboutMePhoto,
  AboutMeTextContainer,
  AboutMeTitle,
  AboutMeDescription,
} from './AboutMe.styles';
import SocialButtonLink from './SocialButtonLink';
import DownloadCVButton from './DownloadCVButton';

export default function AboutMe({ data }) {
  const ref = useRef();
  const {
    aboutMeTitle: title,
    aboutMeDescription,
    aboutMePhoto: photo,
    aboutMeLinkedInLink: linkedInLink,
    aboutMeGithubLink: githubLink,
    aboutMeCV: { url: cvLink },
  } = data;
  const Description = convertRichTextToReactComponent(AboutMeDescription, aboutMeDescription);

  return (
    <AboutMeContainer id="about-me" ref={ref}>
      <AboutMeContentContainer>
        <AboutMeLeftContent>
          <AboutMePhoto src={`https:${photo.url}`} layout="fixed" alt={photo.title} />
          <SocialButtonLink link={githubLink} platformName="github" />
          <SocialButtonLink link={linkedInLink} platformName="linkedIn" isRight />
        </AboutMeLeftContent>
        <AboutMeTextContainer>
          <AboutMeTitle>{title}</AboutMeTitle>
          {Description}
          <DownloadCVButton cvLink={`https:${cvLink}`} />
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
