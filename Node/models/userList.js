const mongoose = require('mongoose')
const userList = new mongoose.Schema({
  name: String,
  password: String
})

module.exports = mongoose.model('user', userList)