const mongoose = require('mongoose');
const Schema = mongoose.Schema
//this will register the user into mongoDB
//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    deafult: Date.now
  }
});
//set to variable.  pass in name i want to use and then the actual schema
module.exports = User = mongoose.model('users', UserSchema)
