const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/', express.static(path.join(__dirname, '.stories')))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/.stories/index.html'));
});

app.listen('9001')