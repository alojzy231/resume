import { SUBMIT_BUTTON_STATE } from '../consts/contactForm';

const sendForm = (data, callback) => {
  const apiEndPoint = `https://formcarry.com/s/${process.env.NEXT_PUBLIC_FORMCARRY_ENDPOINT}`;
  callback(SUBMIT_BUTTON_STATE.loading);
  fetch(apiEndPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        callback(SUBMIT_BUTTON_STATE.success);
      } else {
        throw new Error(
          `Formcarry API: Wrong status code: ${response.status}: ${response.statusText}`,
        );
      }
    })
    .catch(() => {
      callback(SUBMIT_BUTTON_STATE.error);
    });
};

export const sendFormMockup = (_, callback) => {
  callback(SUBMIT_BUTTON_STATE.loading);
  setTimeout(() => callback(SUBMIT_BUTTON_STATE.success), 1000);
};

export default sendForm;
