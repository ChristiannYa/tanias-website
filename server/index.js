require('dotenv').config();
const validator = require('validator');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(
  cors({
    origin: 'https://taniagutti.netlify.app',
    methods: ['POST', 'GET'],
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

// Transporter for email servce
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
})

// Middleware ---
// Parse incoming JSON payloads into JavaScript objects
app.use(express.json());
// ---

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contactform.html'));
});

const serviceLabels = {
  photography: 'Photography',
  videography: 'Videography',
  contentCreation: 'Content Creation',
  other: 'Other',
};

app.post('/send-email', async (req, res) => {
  const { 
    subject,
    name, 
    email, 
    phone,
    referral,
    service,
    message
  } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide a valid email address'
    });
  };

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject}`,
    text: `
      From: ${name}
      Email: ${email}
      Phone: ${phone}
      Referral: ${referral}
      Service: ${service.map(s => serviceLabels[s]).join(' - ')}
      
      Message: 
      ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({
      status: 'success',
      message: 'Email sent successfully!'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to send email'
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});