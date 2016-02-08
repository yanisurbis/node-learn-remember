// module.exports = exports (link to module.exports) = this(rare usage)
var log = require('./logger')(module)

var User = require('./user')
var db = require('./db')
db.connect()

function run () {
  var jack = new User('Jack')
  var ann = new User('Ann')

  jack.hello(ann)

  console.log(db.getPhrase['Run succesful'])
}

if (module.parent) {
// if we export this file then
  exports.run = run
} else {
  run()
}
