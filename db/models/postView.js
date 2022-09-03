const mongoose =  require('../mongoose.js');

const Schema = mongoose.Schema;
const PostViewSchema = new Schema({
  postId: { type: String, ref: 'Post', required: true },
  value: { type: Number, required: false }
});

PostViewSchema.index({ 'PostId': 1 });

module.exports = mongoose.models.PostView || mongoose.model('PostView', PostViewSchema);