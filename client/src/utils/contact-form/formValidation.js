export const validateContactForm = (formData) => {
  switch (true) {
    case !formData.name.trim():
      return 'Please provide a name';
    case !formData.email.trim():
      return 'Please provide an email';
    case formData.service.length === 0:
      return 'Please select at least one service';
    case !formData.message.trim():
      return 'Please leave a message';
    default:
      return null;
  }
};