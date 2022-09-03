const mongoose =  require('../mongoose.js');

const Schema = mongoose.Schema;
const tagSchema = new Schema({
  _id: {type: String, required: true},
  label: { type: String, required: true},
  color: { type: String, required: false},
  value: { type: String, required: true, unique: true, dropDups: true},

  disabled: { type: Boolean, default: false},
  deleted: { type: Boolean, default: false},

  deletedAt: {
    type: Date
  }
});

tagSchema.index({'value': 1});

module.exports = mongoose.models.Tag || mongoose.model('Tag', tagSchema);