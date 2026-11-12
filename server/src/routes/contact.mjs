import express from 'express';
import { sendContactEmail } from '../controllers/contact.mjs';
import { validateContactInput } from '../middlewares/validation.mjs';

const router = express.Router();

router.post('/send-email', validateContactInput, sendContactEmail);

export default router;
