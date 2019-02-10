const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
var UsersSchema = new mongoose.Schema({

  nam: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required:true
  },
  website: {
    type:String,
    required:true
  },

  
});

let TEST = module.exports = mongoose.model('TEST', UsersSchema);