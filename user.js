const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const UsersSchema = new Schema({

  name: String,
  phone: Number,
  email: String,
  age: Number;
  
});

const Users = mongoose.model('Users', UsersSchema);

//Allows model to be used outside
module.exports = Users;
