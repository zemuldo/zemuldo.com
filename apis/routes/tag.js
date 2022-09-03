

const express = require('express');
const tagService = require('../../db/services/tag');

const router = express();

router.get('/', async (req, res) => {
  try {
    const list = await tagService.get();
    res.send(list);
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});
module.exports = router;