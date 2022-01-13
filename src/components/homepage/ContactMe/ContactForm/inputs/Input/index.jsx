import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Placeholder, { Required } from '../Placeholder';
import { InputContainer, StyledInput } from './Input.styles';

export default function Input({
  placeholder,
  disabled,
  required,
  value,
  onChange,
  name,
  isInvalid,
}) {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (isFilled !== !!value) setIsFilled(!!value);
  }, [value, isFilled]);

  return (
    <InputContainer>
      <StyledInput
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        isInvalid={isInvalid}
      />
      <Placeholder isFilled={isFilled} disabled={disabled}>
        {placeholder}
        {required && <Required />}
      </Placeholder>
    </InputContainer>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  isInvalid: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  required: false,
  value: '',
  onChange: () => {},
  name: '',
  isInvalid: false,
};
