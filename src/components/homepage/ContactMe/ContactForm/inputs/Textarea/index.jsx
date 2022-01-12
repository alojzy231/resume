import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../Placeholder';
import { TextareaContainer, StyledTextarea } from './TextArea.styles';

export default function Textarea({ placeholder, disabled, value, onChange, name }) {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (isFilled !== !!value) setIsFilled(!!value);
  }, [value, isFilled]);

  return (
    <TextareaContainer>
      <StyledTextarea value={value} onChange={onChange} disabled={disabled} name={name} />
      <Placeholder isFilled={isFilled} disabled={disabled} isTextarea>
        {placeholder}
      </Placeholder>
    </TextareaContainer>
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  disabled: false,
  value: '',
  onChange: () => {},
  name: '',
};
