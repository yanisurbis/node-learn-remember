var express = require('express')
var app = express()

var port = process.env.PORT || 3000
app.get('/', function (req, res) {
  res.send('<html>Hello World!</html>')
})
app.get('/api', function (req, res) {
  res.json({firstname: 'John', lastname: 'Doe'})
})
app.listen(port)
