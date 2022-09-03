const mongoose =  require('../mongoose.js');

const Schema = mongoose.Schema;
const featuredPostSchema = new Schema({
  postId: { type: String, ref: 'Post', required: true },
  count: { type: Number, required: false },
  period: { type: String, required: false }
});

featuredPostSchema.index({'value': 1});

module.exports = mongoose.models.FeaturedPost || mongoose.model('FeaturedPost', featuredPostSchema);