// querystring and post parameters

var express = require('express')
// #2
var bodyParser = require('body-parser')
var app = express()

app.set('view engine', 'ejs')

var port = process.env.PORT || 3000

// #3
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// #5
var jsonParser = bodyParser.json()

app.use('/assets', express.static(__dirname + '/public'))

app.use('/', function (req, res, next) {
  console.log('request url: ' + req.url)
  next()
})

app.get('/', function (req, res) {
  res.render('index', { ID: req.params.id })
})

app.get('/api', function (req, res) {
  res.json({firstname: 'John', lastname: 'Doe'})
})

// #1
// http://localhost:3000/person/jack?qstr=123
app.get('/person/:id', function (req, res) {
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
})

// #4
app.post('/person', urlencodedParser, function (req, res) {
  res.send('thank u!')
  console.log(req.body.firstname)
  console.log(req.body.lastname)
})

// #5
app.post('/personjson', jsonParser, function (req, res) {
  res.send('json')
  console.log(req.body.firstname)
  console.log(req.body.lastname)
})

app.listen(port)
