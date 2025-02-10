import apiClient from '../api-client';

const sendContactForm = async (formData) => {
  try {
    return await apiClient('/send-email', 'POST', formData);
  } catch (error) {
    throw new Error(error.message || 'Error sending contact form');
  }
};

export default sendContactForm;
