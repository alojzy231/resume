import React from 'react';
import PropTypes from 'prop-types';

export default function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M34.6667 56H24V24H34.6667V29.3333C36.9404 26.4407 40.3884 24.7162 44.0667 24.632C50.6816 24.6687 56.0192 30.0517 56.0001 36.6667V56H45.3333V38C44.9068 35.0203 42.3514 32.8095 39.3413 32.816C38.0247 32.8576 36.782 33.4341 35.8998 34.4123C35.0177 35.3906 34.5724 36.6861 34.6667 38V56ZM18.6667 56H8V24H18.6667V56ZM13.3333 18.6667C10.3878 18.6667 8 16.2789 8 13.3333C8 10.3878 10.3878 8 13.3333 8C16.2789 8 18.6667 10.3878 18.6667 13.3333C18.6667 14.7478 18.1048 16.1044 17.1046 17.1046C16.1044 18.1048 14.7478 18.6667 13.3333 18.6667Z"
        fill="white"
      />
    </svg>
  );
}

LinkedInIcon.propTypes = {
  className: PropTypes.string,
};

LinkedInIcon.defaultProps = {
  className: '',
};
