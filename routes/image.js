const express = require('express');
const fetch = require('isomorphic-unfetch');
const fileupload = require('express-fileupload');
const fs = require('fs');

const api_url = process.env.API_URL;

const router = express();

router.use(fileupload());

router.post('/', async (req, res) => {
  try {
    for (const file in req.files) {
      const fileName = file.split(' ').join('-').toLowerCase();

      const res = await fetch(`${api_url}/image/${fileName}`, {
        method: 'POST',
        headers: { authorization: req.headers.authorization },
        body: {
          name: fileName
        }
      });

      if (res.status !== 200) throw Error('Could not save image');
      
      const fsFileName = `public/z-site-images/${fileName}`;

      await fs.writeFile(fsFileName, req.files[file].data, async function (err) {
        if (err) {
          throw err;
        } 
      });

      await fs.chmod(fsFileName, 0o644, (e) => {
        if (e) throw e;
      });
    }
    res.send('Files saved');
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }
});
module.exports = router;