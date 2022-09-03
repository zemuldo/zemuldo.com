const express = require('express');
const fileUpload = require('express-fileupload');
const imageService = require('../../db/services/image');
const blobServiceClient = require('../apis/azureBlob');

require('dotenv').config();

const containerClient = blobServiceClient.getContainerClient('images');

const router = express();

const requires_auth = (req, res, next) => {
  if (!req.custom_user || !req.custom_user.id) return res.status(401).send('Please login first');
  next();
};

router.get('/', async (req, res) => {
  try {
    const list = await imageService.get(req.query);
    res.send(list);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});

router.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

router.post('/', requires_auth, async (req, res) => {

  try {
    const { files } = req;
    Object.keys(files).forEach(async name => {
      if (Object.prototype.hasOwnProperty.call(files, name)) {
        const file = files[name];
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);
        const uploadBlobResponse = await blockBlobClient.upload(file.data, file.data.length);

        if (uploadBlobResponse.requestId) {
          await imageService.createWithUniqueName({
            name: file.name.toLowerCase(),
            ownerId: req.custom_user.id
          });
        }
      }
    });
    res.send({status: 'Okay'});
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});

router.post('/:name', requires_auth, async (req, res) => {
  try {
    await imageService.createWithUniqueName({
      name: req.params.name.toLowerCase(),
      ownerId: req.custom_user.id
    });
    res.send('Files saved');
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
module.exports = router;