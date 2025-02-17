import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';

import { config } from './config/email/environment.mjs';
import contactRoutes from './routes/contact.mjs';
import bookingRoutes from './routes/booking.mjs';
import { errorHandler } from './middlewares/errorHandler.mjs';

const app = express();

app.use(cors(config.cors));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contactform.html'));
});
app.use('/', contactRoutes);
app.use('/', bookingRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
