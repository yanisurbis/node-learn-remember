var http = require('http')
var url = require('url')
// event emitter
var server = new http.Server((req, res) => {
  console.log('hello world!')
  console.log(req.headers)
  res.end()
})

server.listen(80, '127.0.0.1')
