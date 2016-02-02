var http = require('http')

// event emitter
var server = new http.Server()

server.listen(80, '127.0.0.1')

var counter = 0
server.on('request', function (req, res) {
  // we read from req
  // we write in res
  res.end('Hello, World!' + counter++)
})
