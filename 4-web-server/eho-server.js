var http = require('http')
var url = require('url')
// event emitter
var server = new http.Server((req, res) => {
  // we read from req
  // we write in res
  console.log(req.method, req.url)
  // if we don't send response
  // nothing happens
  var urlParsed = url.parse(req.url, true)
  console.log(urlParsed)

  if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
    res.end(urlParsed.query.message)
  } else {
    res.statusCode = 404
    res.end('Page not found!')
  }
  res.end()
})

server.listen(80, '127.0.0.1')
