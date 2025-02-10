export const validateContactForm = (formData) => {
  if (!formData.name.trim()) {
    return 'Please provide a name';
  }
  if (!formData.email.trim()) {
    return 'Please provide an email';
  }
  if (formData.service.length === 0) {
    return 'Please select at least one service';
  }
  if (!formData.message.trim()) {
    return 'Please provide a message';
  }
  return null;
};
