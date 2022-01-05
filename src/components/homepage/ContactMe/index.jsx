import React from 'react';
import PropTypes from 'prop-types';

import { convertRichTextToReactComponent } from '../../../clients/contentful/dataMapper';
import ContactForm from './ContactForm';
import {
  ContactMeContainer,
  ContactMeTextContent,
  ContactMeTitle,
  ContactMeDescription,
} from './ContactMe.styles';

export default function ContactMe({ data }) {
  const { title, description } = data;
  const Description = convertRichTextToReactComponent(ContactMeDescription, description);
  return (
    <ContactMeContainer id="contact-me">
      <ContactMeTextContent>
        <ContactMeTitle>{title}</ContactMeTitle>
        {Description}
      </ContactMeTextContent>
      <ContactForm />
    </ContactMeContainer>
  );
}

ContactMe.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
