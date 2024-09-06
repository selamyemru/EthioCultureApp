
import express from 'express';
import { createBooking, getBookingsByUser } from '../controllers/booking.js'

const router = express.Router();

router.post('', createBooking);

// Route to get bookings by user
router.get('/:userId', getBookingsByUser);

export default router;
