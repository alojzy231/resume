import React, { useState, useEffect } from 'react';
import sendForm from '../../../../clients/formcarry';

import { INITIAL_FORM_INPUTS_VALUES, SUBMIT_BUTTON_STATE } from '../../../../consts/contactForm';
import ContactFormContainer from './ContactForm.styles';
import Input from './inputs/Input';
import SubmitButton from './inputs/SubmitButton';
import TextArea from './inputs/Textarea';

export default function ContactForm() {
  const [formInputsValues, setFormInputsValues] = useState(INITIAL_FORM_INPUTS_VALUES);

  const [submitButtonState, setSubmitButtonState] = useState(SUBMIT_BUTTON_STATE.default);

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  useEffect(() => {
    setIsFormDisabled(
      submitButtonState === SUBMIT_BUTTON_STATE.loading ||
        submitButtonState === SUBMIT_BUTTON_STATE.success,
    );
  }, [submitButtonState]);

  const handleFormInputChange = ({ target }) =>
    setFormInputsValues((prevFormInputsValues) => ({
      ...prevFormInputsValues,
      [target.name]: target.value,
    }));

  const changeSubmitButtonState = (newState) => setSubmitButtonState(newState);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      submitButtonState !== SUBMIT_BUTTON_STATE.success &&
      submitButtonState !== SUBMIT_BUTTON_STATE.loading
    ) {
      sendForm(formInputsValues, changeSubmitButtonState);
    } else {
      setFormInputsValues(INITIAL_FORM_INPUTS_VALUES);
      setSubmitButtonState(SUBMIT_BUTTON_STATE.default);
    }
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        value={formInputsValues.name}
        onChange={handleFormInputChange}
        name="name"
        disabled={isFormDisabled}
      />
      <Input
        placeholder="Email"
        value={formInputsValues.email}
        onChange={handleFormInputChange}
        name="email"
        disabled={isFormDisabled}
      />
      <TextArea
        placeholder="Message"
        value={formInputsValues.message}
        onChange={handleFormInputChange}
        name="message"
        disabled={isFormDisabled}
      />
      <SubmitButton state={submitButtonState} />
    </ContactFormContainer>
  );
}
