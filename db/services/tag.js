const Tag = require('../models/tag');

module.exports = {
  get: async () => {
    return Tag.find();
  }
};