import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'
import morgan from 'morgan'

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
