
import Article from '../models/Article.js';
import CulturalSite from '../models/CulturalSite.js';
import Event from '../models/Event.js';
import Media from '../models/Media.js';
import User from '../models/User.js';
import Booking from '../models/Booking.js';

export const dashboard= async (req, res) => {
  try {
    const articlesCount = await Article.countDocuments();
    const culturalSitesCount = await CulturalSite.countDocuments();
    const eventsCount = await Event.countDocuments();
    const mediaCount = await Media.countDocuments();
    const usersCount = await User.countDocuments();

    res.json({
      articlesCount,
      culturalSitesCount,
      eventsCount,
      mediaCount,
      usersCount,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
}


// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting event', details: err });
  }
};

// Edit Event
export const editEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const event = await Event.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: 'Error updating event', details: err });
  }
};

// Delete Article
export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    await Article.findByIdAndDelete(id);
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting article', details: err });
  }
};

// Edit Article
export const editArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const article = await Article.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ error: 'Error updating article', details: err });
  }
};

// Delete Media
export const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    await Media.findByIdAndDelete(id);
    res.status(200).json({ message: 'Media deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting media', details: err });
  }
};

// Edit Media
export const editMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const media = await Media.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(media);
  } catch (err) {
    res.status(500).json({ error: 'Error updating media', details: err });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user', details: err });
  }
};

// Edit User
export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error updating user', details: err });
  }
};

// Delete Cultural Site
export const deleteCulturalSite = async (req, res) => {
  try {
    const { id } = req.params;
    await CulturalSite.findByIdAndDelete(id);
    res.status(200).json({ message: 'Cultural Site deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting cultural site', details: err });
  }
};

// Edit Cultural Site
export const editCulturalSite = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const culturalSite = await CulturalSite.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(culturalSite);
  } catch (err) {
    res.status(500).json({ error: 'Error updating cultural site', details: err });
  }
};
// Get  all bookings 
export const getBookings = async (req, res) => {
  try {
   
    const bookings = await Booking.find({})
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ error: err.message });
  }
};
// Delete a booking by ID
export const deleteBookings = async (req, res) => {
  const id  = req.params.id; 
  try {
    const deletedBooking = await Booking.findByIdAndDelete(id); 
    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' }); 
    }

    res.json({ message: 'Booking deleted successfully', booking: deletedBooking }); 
  } catch (err) {
    console.error('Error deleting booking:', err);
    res.status(500).json({ error: err.message }); 
  }
};

