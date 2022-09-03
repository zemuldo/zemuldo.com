const Image = require('../models/image');

module.exports = {
  get: async (params) => {
    if (params.search) {
      const searchString = `.*${params.search}.*`;
      return Image.find({name: {$regex: searchString}}, [], {
        skip: parseInt(params.skip, 12),
        limit: parseInt(params.limit, 12),
        sort: {
          _: -1
        }
      });
    }
    return Image.aggregate([
      {$sort: {_id: -1}},
      {$skip: parseInt(params.skip, 0)}, 
      {$limit: parseInt(params.limit, 12)},
      {$sample: {size: 12}}
    ]);
  },
  findById: async (id) => {
    const image = await Image.findById(id);
    return image;
  },
  create: async (params) => {
    const image = new Image(params);
    await image.save();
    
    return image;
  },
  createWithUniqueName: async (params) => {
    await Image.findOneAndUpdate({name: params.name}, params, {upsert: true});
    return true;
  },

  deleteById: async (id) => {
    const image = await Image.findById(id);

    if (!image) throw 'Deleting a image that doesn\'t exist.';

    return image.deleteOne();

  }
};