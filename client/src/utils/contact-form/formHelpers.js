export const getDisplayValue = (key, value, contactData) => {
  if (key === 'service') {
    return value.map((s) => contactData.serviceLabels[s]).join(' - ');
  }

  const input = contactData.formInputs.find((input) => input.id === key);
  if (input?.isRequired === false) {
    return value.trim() || 'Not Provided';
  }

  return value;
};

export const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  service: [],
  subject: '',
  referral: '',
  message: '',
};
