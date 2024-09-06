// routes/legalContent.js
import  express from 'express'
import  { getTermsAndPrivacy } from '../controllers/legalContent.js'

const router = express.Router();

// Route to get terms and privacy policy content
router.get('/terms-privacy', getTermsAndPrivacy);

export default router;
