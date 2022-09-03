const mongoose =  require('../mongoose.js');

const Schema = mongoose.Schema;
const CodeCopySchema = new Schema({
  postId: { type: String, ref: 'Post', required: true },
  value: { type: Number, required: false}
});

CodeCopySchema.index({ 'postId': 1 });

module.exports = mongoose.models.CodeCopy || mongoose.model('CodeCopy', CodeCopySchema);