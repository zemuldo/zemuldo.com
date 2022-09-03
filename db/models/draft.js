const mongoose = require('../mongoose.js');

const Schema = mongoose.Schema;
const draftSchema = new Schema({
  authorId: { type: String, ref: 'User', required: true },
  title: { type: String, required: false },
  coverPhotoUrl: { type: String, required: false },
  description: { type: String, required: false },
  body: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  tags: { type: Array, default: [] },

  deletedAt: {
    type: Date
  }
});

draftSchema.index({ 'createdAt': 1 });
draftSchema.index({ 'updatedAt': 1 });
draftSchema.index({ 'postId': 1 });

module.exports = mongoose.models.Draft || mongoose.model('Draft', draftSchema);