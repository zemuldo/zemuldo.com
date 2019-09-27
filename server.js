const express = require('express');
const compression = require('compression');
const next = require('next');
const logger = require('./tools/logger');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const router = express();

router.use('/blog/static', express.static('static'));

router.use(compression());

router.get('/blog', (req, res) => {
  return app.render(req, res, '/blog', req.query);
});

router.get('/blog/login', (req, res) => {
  return app.render(req, res, '/blog/login', req.query);
});

router.get('/blog/:meta', (req, res) => {
  return app.render(req, res, '/blog/[meta]', { meta: req.params.meta });
});

router.get('/blog/:meta/edit', (req, res) => {
  return app.render(req, res, '/blog/[meta]/edit', { meta: req.params.meta });
});

app.prepare().then(() => {

  const server = express();

  server.use('*', (req, _res, next)=>{
    logger.info(`Serving:::: ${req.url}`);
    next();
  });

  server.use('/', router);

  server.get('*', (req, res) => {
    return handle(req, res);
  }); 

  server.listen(process.env.PORT, err => {
    if (err) throw err;
    logger.debug(`> Ready on http://localhost:${process.env.PORT}`);
  });

});