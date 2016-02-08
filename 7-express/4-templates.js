// http://ejs.co/
// includes for same footer and header
// define parent pages

var express = require('express')
var app = express()

// express will look in the folder called 'views'
app.set('view engine', 'ejs')

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'))

app.use('/', function (req, res, next) {
  console.log('request url: ' + req.url)
  next()
})

// #1
app.get('/', function (req, res) {
  // go to folder 'view' and render
  res.render('index', { ID: req.params.id })
})

app.get('/api', function (req, res) {
  res.json({firstname: 'John', lastname: 'Doe'})
})

// #2
app.get('/person/:id', function (req, res) {
  res.render('person', { ID: req.params.id })
})
app.listen(port)
