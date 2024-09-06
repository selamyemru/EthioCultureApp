import  mongoose from 'mongoose';


const CulturalSiteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  images: [String],
  videos: [String],
  createdAt: { type: Date, default: Date.now }
});

const CulturalSite = mongoose.model('CulturalSite', CulturalSiteSchema);
export default CulturalSite
