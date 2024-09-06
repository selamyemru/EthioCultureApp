// routes/faqs.js
import  express from 'express'
import  { getAllFAQs } from '../controllers/faq.js'

const router = express.Router();

// Route to get all FAQs
router.get('/', getAllFAQs);

export default router;
