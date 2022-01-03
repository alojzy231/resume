import React from 'react';
import PropTypes from 'prop-types';

import StyledSubmitButton from './SubmitButton.styles';
import Loader from './Loader';

const SUBMIT_BUTTON_TEXT = {
  default: 'Send',
  loading: <Loader />,
  error: 'Error',
  success: 'Thanks <3',
};

export default function SubmitButton({ state }) {
  return (
    <StyledSubmitButton type="submit" state={state}>
      {SUBMIT_BUTTON_TEXT[state]}
    </StyledSubmitButton>
  );
}

SubmitButton.propTypes = {
  state: PropTypes.string.isRequired,
};
