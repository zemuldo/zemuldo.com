const mongoose = require('../mongoose.js');

const Schema = mongoose.Schema;
const ResumeRequestSchema = new Schema({
  email: { type: String, required: true },
  timestamp: { type: Date, required: true },
  resume: { type: Object, required: true }
});

module.exports = mongoose.models.ResumeRequest || mongoose.model('ResumeRequest', ResumeRequestSchema);