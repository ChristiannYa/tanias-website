import validator from 'validator';

export const validateContactInput = (req, res, next) => {
  const { email, name, message, service } = req.body;

  switch (true) {
    case !name || name.trim() === '':
      return res.status(400).json({
        status: 'error',
        message: 'Name is required, provide a valid name',
      });

    case !email || !validator.isEmail(email):
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a valid email address',
      });

    case !service || !Array.isArray(service) || service.length === 0:
      return res.status(400).json({
        status: 'error',
        message: 'Please select at least one service',
      });

    case !message || message.trim() === '':
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a message',
      });

    default:
      return next();
  }
};
