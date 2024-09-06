import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { user, experience, date, numberOfGuests, paymentStatus } = req.body;
    if (!user || !experience || !date || !numberOfGuests) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create and save new booking
    const newBooking = new Booking({
      user,
      experience,
      date,
      numberOfGuests,
      paymentStatus,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(400).json({ error: err.message });
  }
};


// Get bookings by user ID
export const getBookingsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const bookings = await Booking.find({ user: userId }).populate('experience');
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ error: err.message });
  }
};
