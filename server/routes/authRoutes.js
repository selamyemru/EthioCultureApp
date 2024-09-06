import express from 'express';
import {register,login,getUserProfile,getUser,updateProfile} from '../controllers/authController.js'
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', protect, getUserProfile);
router.put('/profile/:id',protect, updateProfile);
router.get('/users', getUser);

export default router;
