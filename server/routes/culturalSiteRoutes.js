import express from 'express';
import { getCulturalSites, getCulturalSiteById, createCulturalSite } from '../controllers/culturalSiteController.js';
const router = express.Router();

router.get('', getCulturalSites);
router.get('/:id', getCulturalSiteById);
router.post('/', createCulturalSite);

export default router;
