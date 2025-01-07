import contact from '../../constants/contact';
import Loading from '../../components/Loading';

import { useState } from 'react';

const ContactForm = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [submittedData, setSubmittedData] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: [],
    subject: '',
    referral: '',
    message: '',
  });

  const getDisplayValue = (key, value) => {
    if (key === 'service') {
      return value.map(s => contact.serviceLabels[s]).join(' - ');
    };

    const input = contact.formInputs.find(input => input.id === key);
    if (input?.isRequired === false) {
      return value.trim() || 'Not Provided';
    };

    return value;
  }

  const handleChange = (e) => {
    // Update the form data as the user types,
    // maintaining the current values in real-time.
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

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Please provide a name';
    }
    if (!formData.email.trim()) {
      return 'Please provide an email';
    }
    if (formData.service.length === 0) {
      return 'Please select at least one servie';
    }
    if (!formData.message.trim()) {
      return 'Please provide a message';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const minLoadingTime = new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      const fetchPromise = fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const [response] = await Promise.all([fetchPromise, minLoadingTime]);
      const result = await response.json();

      if (!response.ok) {
        alert(`Failed to send message: ${result.message}`);
        return;
      }

      // Reset all form fields to empty strings
      // after the email is sent successfully
      if (result.status === 'success') {
        setSubmittedData(formData);
        setShowResponse(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: [],
          subject: '',
          referral: '',
          message: '',
        });
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
                  {getDisplayValue(key, value)}
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
              <p className="conform__services-title">Service needed:</p>
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
              placeholder="your message"
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
