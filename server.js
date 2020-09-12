const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const morgan = require('morgan')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
