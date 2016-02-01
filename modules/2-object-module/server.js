// module.exports = exports (link to module.exports) = this(rare usage)

var User = require('./user')

function run () {
  var jack = new User('Jack')
  var ann = new User('Ann')

  jack.hello(ann)
}

if (module.parent) {
// if we export this file then
  exports.run = run
} else {
  run()
}
