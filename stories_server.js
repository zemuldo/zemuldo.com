const express = require('express');
const path = require('path');
const logger = require('./tools/logger')

require('dotenv').config();

const app = express();

const port = process.env.STORIES_SERVER_PORT;

app.use('/site-stories/static', express.static(path.join(__dirname, 'static')));
app.use('/site-stories/', express.static(path.join(__dirname, '.stories')));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname+'/.stories/index.html'));
});

app.listen(port, logger.debug(`Stories Site Stared on PORT ${port}`));