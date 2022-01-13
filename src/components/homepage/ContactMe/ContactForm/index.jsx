import React, { useState, useEffect } from 'react';
import sendForm from '../../../../clients/formcarry';

import {
  INITIAL_FORM_INPUTS_VALUES,
  INITIAL_IS_FORM_VALID,
  SUBMIT_BUTTON_STATE,
} from '../../../../consts/contactForm';
import ContactFormContainer from './ContactForm.styles';
import Input from './inputs/Input';
import SubmitButton from './inputs/SubmitButton';
import TextArea from './inputs/Textarea';
import validateForm from './validation';

export default function ContactForm() {
  const [formInputsValues, setFormInputsValues] = useState(INITIAL_FORM_INPUTS_VALUES);
  const [isFormValid, setIsFormValid] = useState(INITIAL_IS_FORM_VALID);

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

  const resetForm = () => {
    setFormInputsValues(INITIAL_FORM_INPUTS_VALUES);
    setSubmitButtonState(SUBMIT_BUTTON_STATE.default);
  };

  const checkIfCanSendForm = (validatedForm) =>
    Object.values(validatedForm).every((input) => input);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (submitButtonState === SUBMIT_BUTTON_STATE.success) {
      resetForm();
    } else if (submitButtonState !== SUBMIT_BUTTON_STATE.loading) {
      const validatedForm = validateForm(formInputsValues);

      setIsFormValid(validatedForm);

      if (checkIfCanSendForm(validatedForm)) sendForm(formInputsValues, changeSubmitButtonState);
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
        required
        isInvalid={!isFormValid.name}
      />
      <Input
        placeholder="Email"
        value={formInputsValues.email}
        onChange={handleFormInputChange}
        name="email"
        disabled={isFormDisabled}
        required
        isInvalid={!isFormValid.email}
      />
      <TextArea
        placeholder="Message"
        value={formInputsValues.message}
        onChange={handleFormInputChange}
        name="message"
        disabled={isFormDisabled}
        required
        isInvalid={!isFormValid.message}
      />
      <SubmitButton state={submitButtonState} />
    </ContactFormContainer>
  );
}
