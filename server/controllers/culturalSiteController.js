import CulturalSite from '../models/CulturalSite.js';

export const getCulturalSites = async (req, res) => {
  try {
    const sites = await CulturalSite.find().sort({createdAt:-1});
    res.status(200).json({ success: true, data: sites });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getCulturalSiteById = async (req, res) => {
  try {
    const site = await CulturalSite.findById(req.params.id);
    if (!site) {
      return res.status(404).json({ success: false, error: 'Site not found' });
    }
    res.status(200).json({ success: true, data: site });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const createCulturalSite = async (req, res) => {
  try {
    const site = await CulturalSite.create(req.body);
    res.status(201).json({ success: true, data: site });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
