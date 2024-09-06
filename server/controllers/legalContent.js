import  LegalContent from '../models/LegalContent.js';

export const getTermsAndPrivacy = async (req, res) => {
  try {
    const terms = await LegalContent.findOne({ type: 'terms' });
    const privacy = await LegalContent.findOne({ type: 'privacy' });

    if (!terms || !privacy) {
      return res.status(404).json({ error: 'Content not found' });
    }

    res.json(`${terms.content}<br/><br/>${privacy.content}`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
