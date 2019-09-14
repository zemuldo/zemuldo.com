const express = require('express');
const path = require('path');
const logger = require('./tools/logger');
const cheerio = require('cheerio');
const fs = require('fs');

require('dotenv').config();

const app = express();

const port = process.env.STORIES_SERVER_PORT;

app.get('/site-stories', (req, res) => {
  fs.readFile(path.join(__dirname + '/.stories/index.html'), 'utf8', async function (err, data) {

    if (err) res.redirect('/');

    const $ = cheerio.load(data);
    await $('head').prepend('<meta charSet="utf-8" />');
    await $('head').prepend('<meta charSet="UTF-8" />');
    await $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    await $('head').prepend('<meta httpEquiv="X-UA-Compatible" content="IE=edge" />');
    await $('head').prepend('<meta name="description" content="Danstan Onyango, Software Engineer in Nairobi, Kenya." />');
    await $('head').prepend('<meta name="author" content="Danstan O. Onyango" />');
    await $('head').prepend('<meta name="url" content="https://zemuldo.com" />');
    await $('head').prepend('<meta name="copyright" content="Zemuldo" />');
    await $('head').prepend('<meta name="robots" content="index,follow" />');
    await $('head').prepend('<link rel="shortcut icon" href="/static/images/favicon/fav.png" />');
    await $('head').prepend('<link rel="apple-touch-icon" sizes="144x144" type="image/x-icon" href="/static/images/favicon/apple-touch-icon.png" />');
    await $('head').prepend('<link rel="stylesheet" type="text/css" href="/static/css/plugin.css" />');
    await $('head').prepend('<link rel="stylesheet" type="text/css" href="/static/css/style.css" />');
    await $('head').prepend('<meta name="description" content="Danstan Otieno Onyango is a talented Software Developer. Consult Danstan for your next project. Creative and Clean work for the growth and efficiency of your business.  " />');
    await $('head').prepend('<meta name="twitter:card" content="https://zemuldo.com/static/images/favicon/fav.png" />');
    await $('head').prepend('<meta name="twitter:site" content="@zemuldo" />');
    await $('head').prepend('<meta name="twitter:title" content="Danstan Onyango - Software Engineering, ML, AI & IOT enthusiast" />');
    await $('head').prepend('<meta name="twitter:description" content="The official site for Zemyldo,  Danstan Otieno Onyango, a Self-Taught Software Engineer." />');
    await $('head').prepend('<meta name="twitter:creator" content="@zemuldo" />');
    await $('head').prepend('<meta name="twitter:image" content="https://zemuldo.com/static/images/favicon/fav.png" />');
    await $('head').prepend('<meta name="twitter:domain" content="https://zemuldo.com" />');
    await $('head').prepend('<meta name="keywords" content="zemuldo, danstan, software developer, software engineer, linux, nodejs, developer, software, zemuldo.com, developer, programming, coder, nodejs, elixir " />');
    res.send($.html());
  });
});

app.use('/site-stories/static', express.static(path.join(__dirname, 'static')));
app.use('/site-stories/', express.static(path.join(__dirname, '.stories')));

app.get('/*', function async(_req, res) {
  fs.readFile(path.join(__dirname + '/.stories/index.html'), 'utf8', async function (err, data) {

    if (err) res.redirect('/');

    const $ = cheerio.load(data);
    await $('head').prepend('<meta charSet="utf-8" />');
    await $('head').prepend('<meta charSet="UTF-8" />');
    await $('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    await $('head').prepend('<meta httpEquiv="X-UA-Compatible" content="IE=edge" />');
    await $('head').prepend('<meta name="description" content="Danstan Onyango, Software Engineer in Nairobi, Kenya." />');
    await $('head').prepend('<meta name="author" content="Danstan O. Onyango" />');
    await $('head').prepend('<meta name="url" content="https://zemuldo.com" />');
    await $('head').prepend('<meta name="copyright" content="Zemuldo" />');
    await $('head').prepend('<meta name="robots" content="index,follow" />');
    await $('head').prepend('<link rel="shortcut icon" href="/static/images/favicon/fav.png" />');
    await $('head').prepend('<link rel="apple-touch-icon" sizes="144x144" type="image/x-icon" href="/static/images/favicon/apple-touch-icon.png" />');
    await $('head').prepend('<link rel="stylesheet" type="text/css" href="/static/css/plugin.css" />');
    await $('head').prepend('<link rel="stylesheet" type="text/css" href="/static/css/style.css" />');
    await $('head').prepend('<meta name="description" content="Danstan Otieno Onyango is a talented Software Developer. Consult Danstan for your next project. Creative and Clean work for the growth and efficiency of your business.  " />');
    await $('head').prepend('<meta name="twitter:card" content="https://zemuldo.com/static/images/favicon/fav.png" />');
    await $('head').prepend('<meta name="twitter:site" content="@zemuldo" />');
    await $('head').prepend('<meta name="twitter:title" content="Danstan Onyango - Software Engineering, ML, AI & IOT enthusiast" />');
    await $('head').prepend('<meta name="twitter:description" content="The official site for Zemyldo,  Danstan Otieno Onyango, a Self-Taught Software Engineer." />');
    await $('head').prepend('<meta name="twitter:creator" content="@zemuldo" />');
    await $('head').prepend('<meta name="twitter:image" content="https://zemuldo.com/static/images/favicon/fav.png" />');
    await $('head').prepend('<meta name="twitter:domain" content="https://zemuldo.com" />');
    await $('head').prepend('<meta name="keywords" content="zemuldo, danstan, software developer, software engineer, linux, nodejs, developer, software, zemuldo.com, developer, programming, coder, nodejs, elixir " />');
    res.send($.html());
  });

});

app.listen(port, logger.debug(`Stories Site Stared on PORT ${port}`));