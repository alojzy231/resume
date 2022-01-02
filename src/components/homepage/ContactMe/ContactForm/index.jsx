import React from 'react';

import ContactFormContainer from './ContactForm.styles';
import Input from './inputs/Input';
import TextArea from './inputs/Textarea';

export default function index() {
  return (
    <ContactFormContainer>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <TextArea placeholder="Message" />
    </ContactFormContainer>
  );
}
