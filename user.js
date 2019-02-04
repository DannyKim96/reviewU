var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema and Model
var UsersSchema = new Schema({

  name: String,
  phone: Number,
  email: String,
  age: Number
  
});

var Users = mongoose.model('Users', UsersSchema);

//Allows model to be used outside
module.exports = Users;
