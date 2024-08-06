import express from 'express';
import { Submit } from '../controller/Submit.js';

const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Test route is working');
});

router.post('/submit-donation', Submit);

export default router;
