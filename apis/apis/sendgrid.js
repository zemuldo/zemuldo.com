const { readFile } = require('fs/promises');
const sgMail = require('@sendgrid/mail');
const { resume } = require('./mailer/templates');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendResume(recipient, filePath) {
  const attachment = await readFile(filePath);

  const msg = {
    to: recipient,
    from: 'Danstan Onyango<no-reply@zemuldo.com>',
    subject: 'Danstan\'s Resume',
    text: 'Hi, Please find my resume attached',
    html: resume(),
    attachments: [
      {
        content: attachment.toString('base64'),
        filename: 'Danstan-Onyango-Resume.pdf',
        type: 'application/pdf',
        disposition: 'attachment'
      }
    ]
  };

  await sgMail.send(msg);
}

module.exports = { sendResume };