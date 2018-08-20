const mongoose = require('mongoose')
const db = require('./connect')
const userList = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  password: String
})

module.exports = db.model('user', userList)