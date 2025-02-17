import nodemailer from 'nodemailer';
import { emailConfig } from '../config/email/email.mjs';

const transporter = nodemailer.createTransport(emailConfig);

export const sendMail = async (mailOptions) => {
  return await transporter.sendMail(mailOptions);
};
