import express from 'express';
const router=express.Router()
import { dashboard } from '../controllers/admin.js';


router.get('/dashboard',dashboard)
import  {
  deleteEvent, editEvent,
  deleteArticle, editArticle,
  deleteMedia, editMedia,
  deleteUser, editUser,
  deleteCulturalSite, editCulturalSite
} from '../controllers/admin.js';

// Events
router.delete('/event/:id', deleteEvent);
router.put('/event/:id', editEvent);

// Articles
router.delete('/article/:id', deleteArticle);
router.put('/article/:id', editArticle);

// Media
router.delete('/media/:id', deleteMedia);
router.put('/media/:id', editMedia);

// Users
router.delete('/user/:id', deleteUser);
router.put('/user/:id', editUser);

// Cultural Sites
router.delete('/culturalSite/:id', deleteCulturalSite);
router.put('/culturalSite/:id', editCulturalSite);

export default router