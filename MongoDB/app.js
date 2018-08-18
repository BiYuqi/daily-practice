const express = require('express')
const mongoose = require('mongoose')
const app = express()
const index = require('./router/index')
const movie = require('./router/movies')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/movieList')

mongoose.Promise = global.Promise

// app.use(express.static('static'))
app.use('/static', express.static('static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
app.use('/',index)
app.use('/api',movie)

app.use((req, res) => {
    res.status(404).send('该接口不存在')
})
const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log("app listenning on port 3000")
})


module.exports = app
