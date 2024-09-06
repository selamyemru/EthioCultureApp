import  User from '../models/User.js';
import  jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.create({ firstName, lastName, email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    res.status(201).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  const userId=req.params.id
  try {
    const user = await User.findById(userId).select('-password');
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


export const updateProfile = async (req, res) => {
  const userId = req.params.id; 
  const { firstName, lastName, email, profilePicture } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, email, profilePicture },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find({}).select('-password');
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
