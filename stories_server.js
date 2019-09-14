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
    $('head').prepend('<meta name="twitter:card" content="summary_large_image" />');
    $('head').prepend('<meta name="twitter:site" content="@zemuldo" />');
    $('head').prepend('<meta name="twitter:creator" content="@zemuldo" />');
    $('head').prepend('<meta name="twitter:title" content="Zemuldo Site Stories" />');
    $('head').prepend('<meta name="twitter:description" content="The personal website and blog for User @zemuldo. An enthusiastic Geek Freak of Code #Elixir #SQL #NodeJS #ReactJS" />');
    $('head').prepend('<meta name="twitter:image" content="https://zemuldo.com/static/images/site/site_twitter_card.png" />');
    $('head').prepend('<meta property="og:title" content="Zemuldo Site Stories" />');
    $('head').prepend('<meta property="og:image" content="https://zemuldo.com/static/images/site/site_twitter_card.png" />');
    $('head').prepend('<meta property="og:description" content="These are StorybookJS stories of the website for user @zemuldo" />');
    $('head').prepend('<meta property="og:url" content="https://zemuldo.com/site-stories" />');

    res.send($.html());
  });
});

app.use('/site-stories/static', express.static(path.join(__dirname, 'static')));
app.use('/site-stories/', express.static(path.join(__dirname, '.stories')));

app.get('/*', function async(_req, res) {
  fs.readFile(path.join(__dirname + '/.stories/index.html'), 'utf8', async function (err, data) {

    if (err) res.redirect('/');

    const $ = cheerio.load(data);
    $('head').prepend('<meta name="twitter:card" content="summary_large_image" />');
    $('head').prepend('<meta name="twitter:site" content="@zemuldo" />');
    $('head').prepend('<meta name="twitter:creator" content="@zemuldo" />');
    $('head').prepend('<meta name="twitter:title" content="Zemuldo Site Stories" />');
    $('head').prepend('<meta name="twitter:description" content="These are StorybookJS stories of the components that make up the website for user @zemuldo" />');
    $('head').prepend('<meta name="twitter:image" content="https://zemuldo.com/static/images/site/site_twitter_card.png" />');
    $('head').prepend('<meta property="og:title" content="Zemuldo Site Stories" />');
    $('head').prepend('<meta property="og:image" content="https://zemuldo.com/static/images/site/site_twitter_card.png" />');
    $('head').prepend('<meta property="og:description" content="These are StorybookJS stories of the components that make up the website for user @zemuldo" />');
    $('head').prepend('<meta property="og:url" content="https://zemuldo.com/site-stories" />');
    res.send($.html());
  });

});

app.listen(port, logger.debug(`Stories Site Stared on PORT ${port}`));