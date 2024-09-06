import Event from '../models/Event.js';

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const event = await Event.create({
      title,
      description,
      date,
      location,
      organizer: req.user.id // Assuming `req.user` is set by the auth middleware
    });
    res.status(201).json({ success: true, data: event });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'firstName lastName').sort({createdAt:-1});
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Get a single event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('organizer', 'firstName lastName');
    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Update an event by ID
export const updateEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, date, location },
      { new: true, runValidators: true }
    );
    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Delete an event by ID
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
