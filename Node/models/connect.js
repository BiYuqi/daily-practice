const mongoose = require('mongoose')
const SQ_PATH = 'mongodb://127.0.0.1:27017/userInfo'
mongoose.connect(SQ_PATH)
mongoose.promise = global.promise
mongoose.connection.on('connected', () => {
  console.log('数据库连接成功')
})
mongoose.connection.on('error', () => {
  console.log('数据库连接失败')
})
module.exports = mongoose