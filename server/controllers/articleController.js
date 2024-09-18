import  Article from '../models/Article.js';

// Create a new article
export const createArticle = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const article = await Article.create({
      title,
      content,
      author: req.user.id,  
      tags
    });
    res.status(201).json({ success: true, data: article });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Get all articles
export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('author', 'firstName lastName');
    res.status(200).json({ success: true, data: articles });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Get a single article by ID
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('author', 'firstName lastName');
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.status(200).json({ success: true, data: article });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Update an article by ID
export const updateArticle = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { title, content, tags },
      { new: true, runValidators: true }
    );
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.status(200).json({ success: true, data: article });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Delete an article by ID
export const deleteArticle = async (req, res) => {
  const articleId=req.params.id
  try {
    const article = await Article.findByIdAndDelete(articleId);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
