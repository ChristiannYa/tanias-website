import { sendMail } from '../services/mailer.mjs';

export class BookingService {
    async createBooking(bookingData) {
        const mailOptions = {
            from: bookingData.email,
            to: process.env.EMAIL_USER,
            text: `
        Booking Request Details:
        Name: ${bookingData.clientName}
        Email: ${bookingData.email}
        Phone: ${bookingData.phone}
        Date Requested: ${bookingData.date}
        Session Type: ${bookingData.sessionType}
        Message: ${bookingData.message}
      `,
        };

        await sendMail(mailOptions);
        return bookingData;
    }
}
