var user = require('./user')

var jack = new user.User('Jack')
var ann = new user.User('Ann')

jack.hello(ann)
