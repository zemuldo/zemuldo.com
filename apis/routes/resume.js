const express = require('express');
const axios = require('axios');
const fileUpload = require('express-fileupload');
const resumeService = require('../../db/services/resume');
const blobServiceClient = require('../apis/azureBlob');
const { sendResume } = require('../apis/sendgrid');

const captchaVerifyApi = 'https://www.google.com/recaptcha/api/siteverify';

require('dotenv').config();

const containerClient = blobServiceClient.getContainerClient('resumes');

const router = express();

const requires_auth = (req, res, next) => {
  if (!req.custom_user || !req.custom_user.id) return res.status(401).send('Please login first');
  next();
};

router.post('/share', async (req, res) => {
  try {
    const recaptchaResponse = req['g-recaptcha-response'] || req.body['recaptchaChallengeValue'];
    if (!recaptchaResponse) {
      return res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: 'Please select captcha' }]);
    }
    const secretKey = process.env.RECAPCHER_SECRET;
    const verificationUrl = `${captchaVerifyApi}?secret=${secretKey}&response=${recaptchaResponse}`;
    const recaptcherRes = await axios.get(verificationUrl);

    if (recaptcherRes.data.success !== undefined && !recaptcherRes.data.success) {
      return res.json({ 'responseCode': 1, 'responseDesc': 'Failed captcha verification' });
    }
    const resume = await resumeService.get();
    const blobClient = await containerClient.getBlobClient(resume.name);
    const filePath = `/tmp/${resume.name}`;

    await blobClient.downloadToFile(filePath);
      await sendResume(req.body.email, filePath);
      await resumeService.requested(req.body.email, resume)
    res.send('Success');


  } catch (error) {
      console.log(error)
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
        const blockBlobClient = containerClient.getBlockBlobClient(file.name.toLowerCase());
        const uploadBlobResponse = await blockBlobClient.upload(file.data, file.data.length);

        if (uploadBlobResponse.requestId) {
          await resumeService.createWithUniqueName({
            name: file.name.toLowerCase()
          });
        }
      }
    });
    res.send({ status: 'Okay' });
  } catch (error) {
    res.status(400).send([{ errorType: 'BAD_REQUEST', errorMessage: error.toString() }]);
  }

});

module.exports = router;

