import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Placeholder, { Required } from '../Placeholder';
import { TextareaContainer, StyledTextarea } from './TextArea.styles';

export default function Textarea({
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
    <TextareaContainer>
      <StyledTextarea
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        isInvalid={isInvalid}
      />
      <Placeholder isFilled={isFilled} disabled={disabled} isTextarea>
        {placeholder}

        {required && <Required />}
      </Placeholder>
    </TextareaContainer>
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  isInvalid: PropTypes.bool,
};

Textarea.defaultProps = {
  placeholder: '',
  disabled: false,
  required: false,
  value: '',
  onChange: () => {},
  name: '',
  isInvalid: false,
};
