import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../Placeholder';
import { InputContainer, StyledInput } from './Input.styles';

export default function Input({ placeholder, disabled }) {
  const [value, setValue] = useState('');
  const [isFilled, toggleIsFilled] = useState(false);

  useEffect(() => {
    if (isFilled !== !!value) toggleIsFilled(!!value);
  }, [value, isFilled]);

  const handleChange = ({ target }) => setValue(target.value);

  return (
    <InputContainer>
      <StyledInput value={value} onChange={handleChange} disabled={disabled} />
      <Placeholder isFilled={isFilled} disabled={disabled}>
        {placeholder}
      </Placeholder>
    </InputContainer>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  disabled: false,
};
