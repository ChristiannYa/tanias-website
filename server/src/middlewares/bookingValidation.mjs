import validator from 'validator';

export const validateBookingInput = (req, res, next) => {
  const { clientName, email, phone, date, sessionType } = req.body;

  switch (true) {
    case !clientName || clientName.trim() === '':
      return res.status(400).json({
        status: 'error',
        message: 'Name is required',
      });

    case !email || !validator.isEmail(email):
      return res.status(400).json({
        status: 'error',
        message: 'Valid email is required',
      });

    case !date || !validator.isISO8601(date):
      return res.status(400).json({
        status: 'error',
        message: 'Valid date is required',
      });

    case !sessionType:
      return res.status(400).json({
        status: 'error',
        message: 'Session type is required',
      });

    default:
      return next();
  }
};
