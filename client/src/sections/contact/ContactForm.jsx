import { useState } from 'react';

import sendContactForm from '../../utils/requests/contact-form/send-contact-form';
import contact from '../../constants/contact';
import { validateContactForm } from '../../utils/contact-form/formValidation';
import {
  getDisplayValue,
  INITIAL_FORM_STATE,
} from '../../utils/contact-form/formHelpers';
import Loading from '../../components/Loading';

const ContactForm = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [submittedData, setSubmittedData] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      service: formData.service.includes(value)
        ? formData.service.filter((service) => service !== value)
        : [...formData.service, value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validateContactForm(formData);

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const minLoadingTime = new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );
      const [result] = await Promise.all([
        sendContactForm(formData),
        minLoadingTime,
      ]);

      if (result.status === 'success') {
        setSubmittedData(formData);
        setShowResponse(true);
        setFormData(INITIAL_FORM_STATE);
      } else {
        alert('Operation failed: ' + result.message);
      }
    } catch (error) {
      console.log('Error: ', error);
      alert('Network error or cannot connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="screen800 mx-auto blur-4 shadow-bs-1">
      {/* error message */}
      {error && (
        <details className="blur-3 px-6 py-4">
          <summary className="font-ff-3 text-xl text-red-600 hover:cursor-pointer">
            Error
          </summary>
          <div className="text-fc-3 font-ff-3 tracking-wide mt-1">
            - {error}
          </div>
        </details>
      )}

      {/* success message */}
      {showResponse && submittedData && (
        <details className="blur-3 py-3 px-5">
          <summary className="font-ff-3 text-xl text-acc-3 hover:cursor-pointer">
            Message sent successfully!
          </summary>
          <div className="mt-1">
            {Object.entries(submittedData).map(([key, value]) => (
              <div key={key} className="flex gap-x-1">
                <h1 className="font-ff-3 text-fc-3 text-xl">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h1>
                <p className="font-ff-3 text-slate-400 text-lg">
                  {getDisplayValue(key, value, contact)}
                </p>
              </div>
            ))}
          </div>
        </details>
      )}

      <form className="conform" onSubmit={handleSubmit}>
        <div className="flex gap-4 max-md:flex-col">
          <div className="conform__area1">
            {contact.formInputs.map((input) => (
              <input
                key={input.id}
                className="conform__input"
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                value={formData[input.id]}
                onChange={handleChange}
              />
            ))}

            {/* service needed */}
            <div className="conform__services">
              <p className="conform__services-title">I am interested in:</p>
              <div className="conform__services-options">
                {contact.serviceOptions.map((option) => (
                  <label
                    key={option.value}
                    className="conform__services-option"
                  >
                    <input
                      type="checkbox"
                      id="service"
                      name="service"
                      value={option.value}
                      checked={formData.service.includes(option.value)}
                      onChange={handleServiceChange}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="conform__area2">
            <textarea
              className="conform__input conform__textarea"
              id="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="conform__submit border relative w-28 h-12"
            disabled={isLoading}
          >
            {isLoading ? <Loading /> : 'Send'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
