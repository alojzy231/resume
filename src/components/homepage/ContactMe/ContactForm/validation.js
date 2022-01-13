import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
  REGEX_EMAIL,
} from '../../../../consts/contactForm';

const validateName = (value) => {
  if (!value) return false;

  if (value < NAME_MIN_LENGTH) return false;
  if (value > NAME_MAX_LENGTH) return false;

  return true;
};
const validateEmail = (value) => REGEX_EMAIL.test(value);

const validateMessage = (value) => {
  if (!value) return false;

  if (value < MESSAGE_MIN_LENGTH) return false;
  if (value > MESSAGE_MAX_LENGTH) return false;

  return true;
};

const validateForm = (formValues) => {
  const isFormValid = {
    name: validateName(formValues.name),
    email: validateEmail(formValues.email),
    message: validateMessage(formValues.message),
  };

  return isFormValid;
};

export default validateForm;
