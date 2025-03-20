import express from 'express';
import { Submit, sendOTP, verifyOTP } from '../controllers/Submit.js';

const router = express.Router();

router.post('/submit-donation', Submit);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);

export default router;