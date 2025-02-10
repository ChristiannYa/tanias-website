export const getDisplayValue = (key, value, contactData) => {
  if (key === 'service') {
    return value.map((s) => contactData.serviceLabels[s]).join(' - ');
  }

  if (!value.trim()) {
    return 'Not Provided';
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
