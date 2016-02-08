// exports
// global

var db = require('../db')

db.connect()

function User (name) {
  this.name = name
}

User.prototype.hello = function (who) {
  console.log(db.getPhrase('Hello') + ', ???' + who.name)
}

console.log('user.js is required')

module.exports = User

// if we want global variable
// global.User = User
// and then use it as User in another file

console.log(module)
