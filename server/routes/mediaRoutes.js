import  express  from 'express';
import  { upload, uploadMedia, getMedia } from '../controllers/mediaController.js'
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getMedia);
router.post('/upload', protect, upload, uploadMedia);

export default router;
