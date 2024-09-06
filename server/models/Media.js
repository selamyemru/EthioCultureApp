import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  filePath: { type: String, required: true },
  fileType: { type: String, required: true },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  likes: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  comments: [{
    text: String,
    date: { type: Date, default: Date.now },
    userId: String
  }],
  userLiked: [String],
  createdAt: { type: Date, default: Date.now }
});

const Media= mongoose.model('Media', MediaSchema);
export  default Media
