
import express from 'express';
import { createBooking, getBookingsByUser,getBookings,deleteBookings} from '../controllers/booking.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('', createBooking);

// Route to get bookings by user
router.get('/:userId', getBookingsByUser);
router.get('', getBookings);
router.get('/:id',protect, deleteBookings );

export default router;
