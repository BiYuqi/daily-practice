const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const formidAble = require('formidable')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const ejs = require('ejs')

const router = require('./router/index')
const app = express()
// BASE CONFIG
const HOST = process.env.port || '3001'
// 设置模板引擎
app.set('views', path.join(__dirname, 'views'))
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.use(express.static('static'))
// CROS 跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
      res.send(200)
  } else {
      next()
  }
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', router)


app.listen(HOST, () => {
  console.log(`Node服务已经在${HOST}端口运行`)
})