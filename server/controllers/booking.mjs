import { BookingService } from '../services/bookingServices.mjs';
import { successResponse, errorResponse } from '../utils/response.mjs';
import Booking from '../models/Booking.mjs';

const bookingService = new BookingService();

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(
      req.body.clientName,
      req.body.email,
      req.body.phone,
      req.body.date,
      req.body.sessionType,
      req.body.message
    );

    if (!booking.isValidDate()) {
      return res.status(400).json(errorResponse('Please select a future date'));
    }

    const result = await bookingService.createBooking(booking);
    res.json(successResponse('Booking request sent successfully!', result));
  } catch (error) {
    res.status(500).json(errorResponse('Failed to process booking request'));
  }
};
