import mongoose from "mongoose";

const LegalContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['terms', 'privacy'],
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LegalContent = mongoose.model('LegalContent', LegalContentSchema);
export default LegalContent
