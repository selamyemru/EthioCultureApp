import express from 'express';
import { createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle } from '../controllers/articleController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', protect, createArticle);
router.get('', getAllArticles);
router.get('/:id', getArticleById);
router.put('/:id', protect, updateArticle);
router.delete('/:id', protect, deleteArticle);

export default router;
