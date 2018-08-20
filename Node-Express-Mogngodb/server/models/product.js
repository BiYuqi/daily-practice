const mongoose = require('mongoose')
const db = require('./connect')
const product = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  date: {
    type: String
  },
  isShow: {
    type: Boolean
  }
})

module.exports = db.model('product', product)
