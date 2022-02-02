import React from 'react';
import PropTypes from 'prop-types';

import {
  SocialButtonLinkContainer,
  StyledGithubIcon,
  StyledLinkedInIcon,
} from './SocialButtonLink.styles';

export default function SocialButtonLink({ link, platformName, isRight }) {
  if (platformName === 'github')
    return (
      <SocialButtonLinkContainer href={link} isRight={isRight}>
        <StyledGithubIcon />
      </SocialButtonLinkContainer>
    );

  return (
    <SocialButtonLinkContainer href={link} isRight={isRight}>
      <StyledLinkedInIcon />
    </SocialButtonLinkContainer>
  );
}

SocialButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  platformName: PropTypes.string.isRequired,
  isRight: PropTypes.bool,
};

SocialButtonLink.defaultProps = {
  isRight: false,
};
