// middleware : code that sits between two layers of software
// express/resources/middleware

var express = require('express')
var app = express()

var port = process.env.PORT || 3000

// use this url to get files
app.use('/assets', express.static(__dirname + '/public'))
// after calling next() express run next function that is bined with this route
app.use('/', function (req, res, next) {
  console.log('request url: ' + req.url)
  next()
})
app.get('/', function (req, res) {
  res.send('<html><head><link href=assets/style.css rel=stylesheet></head>Hello World!</html>')
})
app.get('/api', function (req, res) {
  res.json({firstname: 'John', lastname: 'Doe'})
})

// with :id could get data out of url
app.get('/person/:id', function (req, res) {
  res.send('<html>Person:' + req.params.id + '</html>')
})
app.listen(port)
