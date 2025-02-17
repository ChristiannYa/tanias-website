import express from 'express';
import { createBooking } from '../controllers/booking.mjs';
import { validateBookingInput } from '../middlewares/bookingValidation.mjs';

const router = express.Router();

router.post('/bookings', validateBookingInput, createBooking);

export default router;
