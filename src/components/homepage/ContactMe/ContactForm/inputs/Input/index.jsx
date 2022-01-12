import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../Placeholder';
import { InputContainer, StyledInput } from './Input.styles';

export default function Input({ placeholder, disabled, value, onChange, name }) {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (isFilled !== !!value) setIsFilled(!!value);
  }, [value, isFilled]);

  return (
    <InputContainer>
      <StyledInput value={value} onChange={onChange} disabled={disabled} name={name} />
      <Placeholder isFilled={isFilled} disabled={disabled}>
        {placeholder}
      </Placeholder>
    </InputContainer>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  value: '',
  onChange: () => {},
  name: '',
};
