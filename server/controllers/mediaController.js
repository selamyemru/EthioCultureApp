import  Media from '../models/Media.js';
import  multer from 'multer';

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer({ storage }).single('file');

export const uploadMedia = async (req, res) => {
  try {
    const media = await Media.create({
      title: req.body.title,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      uploader: req.user.id,
    });
    res.status(201).json({ success: true, data: media });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({createdAt:-1});
    res.status(200).json({ success: true, data: media });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
