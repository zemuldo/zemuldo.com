const express = require('express')
const compression = require('compression')  
const next = require('next')

require('dotenv')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(compression()) 

  server.get('/blog/login', (req, res) => {
    return app.render(req, res, '/blog/login', req.query)
  })

  server.get('/blog', (req, res) => {
    return app.render(req, res, '/blog', req.query)
  })

  server.get('/blog/:meta', (req, res) => {
    return app.render(req, res, '/blog/[meta]', { meta: req.params.meta })
  })

  server.get('/blog/:meta/edit', (req, res) => {
    return app.render(req, res, '/blog/[meta]/edit', { meta: req.params.meta })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT}`)
  })
})
