import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../Placeholder';
import { TextareaContainer, StyledTextarea } from './TextArea.styles';

export default function Textarea({ placeholder, disabled }) {
  const [value, setValue] = useState('');
  const [isFilled, toggleIsFilled] = useState(false);

  useEffect(() => {
    if (isFilled !== !!value) toggleIsFilled(!!value);
  }, [value, isFilled]);

  const handleChange = ({ target }) => setValue(target.value);

  return (
    <TextareaContainer>
      <StyledTextarea value={value} onChange={handleChange} disabled={disabled} />
      <Placeholder isFilled={isFilled} disabled={disabled} isTextarea>
        {placeholder}
      </Placeholder>
    </TextareaContainer>
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  placeholder: '',
  disabled: false,
};
