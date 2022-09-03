const mongoose =  require('../mongoose.js');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  oAuthId: { type: Number, required: true },
  oAuthData: { type: Object, required: true},
  profilePhotoUrl: { type: String, required: true},
  joined: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },

  disabled: { type: Boolean, default: false},
  deleted: { type: Boolean, default: false},

  deletedAt: {
    type: Date
  }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);