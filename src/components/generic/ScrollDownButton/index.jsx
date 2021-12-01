import React from 'react';
import PropTypes from 'prop-types';

import ScrollDownButtonContainer from './ScrollDownButton.styles';

export default function ScrollDownButton({ className, sectionRef }) {
  const handleScrollDown = () => {
    const {
      current: { offsetHeight, offsetTop },
    } = sectionRef;
    window.scrollTo({
      top: offsetHeight + offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ScrollDownButtonContainer className={className} onClick={handleScrollDown}>
      <svg viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M62 113.667C33.4653 113.667 10.3333 90.5347 10.3333 62C10.3333 33.4653 33.4653 10.3333 62 10.3333C90.5347 10.3333 113.667 33.4653 113.667 62C113.635 90.5217 90.5217 113.635 62 113.667ZM62 20.6667C39.1722 20.6667 20.6667 39.1722 20.6667 62C20.6667 84.8278 39.1722 103.333 62 103.333C84.8278 103.333 103.333 84.8278 103.333 62C103.308 39.1829 84.8172 20.6923 62 20.6667ZM61.7417 80.0833L36.1667 54.5083L43.4723 47.2027L61.7417 65.4668L80.011 47.2027L87.3167 54.5083L61.7417 80.0833Z"
          fill="white"
        />
      </svg>
    </ScrollDownButtonContainer>
  );
}

ScrollDownButton.protoTypes = {
  className: PropTypes.string,
  sectionRef: PropTypes.shape({}).isRequired,
};

ScrollDownButton.defaultProps = {
  className: '',
};
