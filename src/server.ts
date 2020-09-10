import express from 'express'

import serveStatic from 'serve-static'

const app = express()



// here we are configuring dist to serve app files
app.use('/', serveStatic( './dist'))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => {
  res.sendFile('./dist/index.html')
})

const port = process.env.PORT || 8080
app.listen(port)
// tslint:disable-next-line:no-console
console.log(`app is listening on port: ${port}`)
