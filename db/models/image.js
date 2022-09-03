const mongoose = require('../mongoose.js');

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  ownerId: { type: String, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },

  deletedAt: {
    type: Date
  }
});

ImageSchema.index({ 'name': 1 });
ImageSchema.index({ 'createdAt': 1 });
ImageSchema.index({ 'updatedAt': 1 });
ImageSchema.index({ 'ownerId': 1 });

module.exports = mongoose.models.Image || mongoose.model('Image', ImageSchema);