// exports
// global

var phrases = require('./ru')

function User (name) {
  this.name = name
}

User.prototype.hello = function (who) {
  console.log(phrases.Hello + ', ???' + who.name)
}

console.log('user.js is required')

exports.User = User

// if we want global variable
// global.User = User
// and then use it as User in another file
