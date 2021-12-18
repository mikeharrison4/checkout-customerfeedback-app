import content from '../data/feedbackForm.json';

export const validateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = content.required;
  } else if (!/^[_A-z\s]*((-|\s)*[_A-z\s])*$/.test(values.name)) {
    errors.name = content.invalidName;
  }
  if (!values.email) {
    errors.email = content.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = content.invalidEmail;
  }
  return errors;
};