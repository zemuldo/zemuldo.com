const express = require('express');
const path = require('path');
const logger = require('./tools/logger');
const cheerio = require('cheerio');
const fs = require('fs');

require('dotenv').config();

const app = express();

const port = process.env.STORIES_SERVER_PORT;

app.use('/site-stories/static', express.static(path.join(__dirname, 'static')));
app.use('/site-stories/', express.static(path.join(__dirname, '.stories')));


app.get('/*', function (req, res) {
  fs.readFile(path.join(__dirname + '/.stories/index.html'), 'utf8', function (err, data) {

    if (err) throw err;

    const $ = cheerio.load(data);
    $('head').prepend('<meta charSet="utf-8" />');
    $('head').prepend('<meta charSet="UTF-8" />');
    $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    $('head').prepend('<meta httpEquiv="X-UA-Compatible" content="IE=edge" />');
    $('head').prepend('<meta name="description" content="Danstan Onyango, Software Engineer in Nairobi, Kenya." />');
    $('head').prepend('<meta name="author" content="Danstan O. Onyango" />');
    $('head').prepend('<meta name="url" content="https://zemuldo.com" />');
    $('head').prepend('<meta name="copyright" content="Zemuldo" />');
    $('head').prepend('<meta name="robots" content="index,follow" />');
    $('head').prepend('<link rel="shortcut icon" href="/static/images/favicon/fav.png" />');
    $('head').prepend('<link rel="apple-touch-icon" sizes="144x144" type="image/x-icon" href="/static/images/favicon/apple-touch-icon.png" />');
    $('head').prepend('<link rel="stylesheet" type="text/css" href="/static/css/plugin.css" />');
    $('head').prepend('<link rel="stylesheet" type="text/css" href="/static/css/style.css" />');
    $('head').prepend('<meta name="description" content="Danstan Otieno Onyango is a talented Software Developer. Consult Danstan for your next project. Creative and Clean work for the growth and efficiency of your business.  " />');
    $('head').prepend('<meta name="twitter:card" content="https://zemuldo.com/static/images/favicon/fav.png" />');
    $('head').prepend('<meta name="twitter:site" content="@zemuldo" />');
    $('head').prepend('<meta name="twitter:title" content="Danstan Onyango - Software Engineering, ML, AI & IOT enthusiast" />');
    $('head').prepend('<meta name="twitter:description" content="The official site for Zemyldo,  Danstan Otieno Onyango, a Self-Taught Software Engineer." />');
    $('head').prepend('<meta name="twitter:creator" content="@zemuldo" />');
    $('head').prepend('<meta name="twitter:image" content="https://zemuldo.com/static/images/favicon/fav.png" />');
    $('head').prepend('<meta name="twitter:domain" content="https://zemuldo.com" />');
    $('head').prepend('<meta name="keywords" content="zemuldo, danstan, software developer, software engineer, linux, nodejs, developer, software, zemuldo.com, developer, programming, coder, nodejs, elixir " />');
    res.send($.html());
  });

});

app.listen(port, logger.debug(`Stories Site Stared on PORT ${port}`));