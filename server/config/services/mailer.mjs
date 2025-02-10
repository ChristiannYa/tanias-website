import nodemailer from 'nodemailer';
import { emailConfig } from '../email/email.mjs';

const transporter = nodemailer.createTransport(emailConfig);

export const sendMail = async (mailOptions) => {
  return await transporter.sendMail(mailOptions);
};
