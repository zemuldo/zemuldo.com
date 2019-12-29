const express = require('express');
const fetch = require('isomorphic-unfetch');
const fileupload = require('express-fileupload');
const fs = require('fs');

const api_url = process.env.API_URL;

const router = express();

router.use(fileupload());

router.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

router.post('/', async (req, res) => {
  try {
    for (const file in req.files) {
      const fileName = file.split(' ').join('-');

      const res = await fetch(`${api_url}/image/${fileName}`, {
        method: 'POST',
        headers: { authorization: req.headers.authorization },
        body: {
          name: fileName
        }
      });

      if (res.status !== 200) throw Error('Could not save image');

      await fs.writeFile(`public/z-site-images/${fileName}`, req.files[file].data, async function (err) {
        if (err) {
          throw err;
        } 
      });
    }
    res.send('Files saved');
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
module.exports = router;