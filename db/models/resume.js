const mongoose = require('../mongoose.js');

const Schema = mongoose.Schema;
const ResumeSchema = new Schema({
  name: { type: String, required: true }
});

ResumeSchema.index({ 'name': 1 });

module.exports = mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);