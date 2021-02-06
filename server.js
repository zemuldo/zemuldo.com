const compression = require('compression');
const logger = require('./tools/logger');
const express = require('express');
const cheerio = require('cheerio');
const next = require('next');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const imageServer = express();

require('dotenv-flow').config();

async function log_path(req) {
  const _path = `Serving: ${req.originalUrl.split('?')[0]}`.slice(0, 1000);
  if (_path.includes('/site-stories/')) return;
  if (_path.includes('/')) return;
  if (_path.includes('/_next/')) return;
  return logger.info(`${_path} FOR:${req.headers['remote_addr'] || req.connection.remoteAddress || 'Unknown-IP'} OR ${req.proxy_add_x_forwarded_for || 'Non-Proxy-Source'}`);
}

const prepSiteStories = (data) => {
  const $ = cheerio.load(data);
  $('head').prepend('<meta name="twitter:card" content="summary_large_image" />');
  $('head').prepend('<meta name="twitter:site" content="@zemuldo" />');
  $('head').prepend('<meta name="twitter:creator" content="@zemuldo" />');
  $('head').prepend('<meta name="twitter:title" content="Zemuldo Site Stories" />');
  $('head').prepend('<meta name="twitter:description" content="These are StorybookJS stories of the components that make up the website for user @zemuldo" />');
  $('head').prepend('<meta name="twitter:image" content="https://zemuldo.com/images/site/site_stories_large.png" />');
  $('head').prepend('<meta property="og:title" content="Zemuldo Site Stories" />');
  $('head').prepend('<meta property="og:image" content="https://zemuldo.com/images/site/site_stories_large.png" />');
  $('head').prepend('<meta property="og:description" content="These are StorybookJS stories of the components that make up the website for user @zemuldo" />');
  $('head').prepend('<meta property="og:url" content="https://zemuldo.com/site-stories" />');
  return $;
};

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const router = express();

router.use(cookieParser());

router.use('/image', require('./routes/image'));

router.get('/site-stories', (_req, res) => {
  fs.readFile(path.join(__dirname + '/.stories/index.html'), 'utf8', async function (err, data) {

    if (err) res.redirect('/');

    const $ = prepSiteStories(data);

    res.send($.html());
  });
});

router.get('/', (req, res) => {
  return handle(req, res);
});

router.use('/blog', express.static('static'));
router.use('/site-stories', express.static(path.join(__dirname, 'public')));
router.use('/site-stories/', express.static(path.join(__dirname, '.stories')));
router.use('/', express.static(path.join(__dirname, '..next')));
router.use('/', express.static(path.join(__dirname, '.stories')));
router.use(compression());

app.prepare().then(() => {

  const server = express();

  server.get('/blog/post/:meta', (req, _res) => app.render(req, _res, `/blog/${req.params.meta}`));

  server.use('/', router);

  server.use('*', (req, _res, next) => {
    log_path(req);
    next();
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.UI_PORT, err => {
    if (err) throw err;
    logger.info(`> App Server Ready on http://localhost:${process.env.UI_PORT}`);
  });

});

imageServer.use(express.static(path.join(__dirname, 'public')));

imageServer.listen(process.env.IMAGE_SERVER_PORT, err =>{
  if (err) throw err;
  else logger.info(`> Image Server Ready on http://localhost:${process.env.IMAGE_SERVER_PORT}`);
});