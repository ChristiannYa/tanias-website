import { successResponse, errorResponse } from '../utils/response.mjs';
import { serviceLabels } from '../constants/serviceLabels.mjs';
import { sendMail } from '../services/mailer.mjs';

export const sendContactEmail = async (req, res) => {
  const { subject, name, email, phone, referral, service, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject}`,
    text: `
      From: ${name}
      Email: ${email}
      Phone: ${phone}
      Referral: ${referral}
      Service: ${service.map((s) => serviceLabels[s]).join(' - ')}
      Message:
      ${message}
    `.trim(),
  };

  try {
    await sendMail(mailOptions);
    res.json(successResponse('Email sent successfully!'));
  } catch (error) {
    res.status(500).json(errorResponse('Failed to send email'));
  }
};
