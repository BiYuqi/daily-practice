const express = require('express')
const router = express.Router()
const User = require('../models/users')
// 返回首页
router.get('/', (req, res) => {
  res.render('index', {
    name: '毕宇旗',
    age: '26'
  })
})
// 查询
router.get('/search', (req, res) => {
  User.find(req.query).then((list) => {
    res.json(list)
  })
})
// 注册用户信息
router.post('/register',(req,res) => {
  User.create(req.body, (err, user) => {
    if(err){
      res.json(err)
    }else{
      res.json(user)
    }
  })
})
// 删除用户信息
router.post('/remove', (req, res) => {
  User.findOneAndRemove({
    _id: req.body.id
  }).then((ss) => {
    res.json(ss)
  }).catch((ee) => {
    res.json(ee)
  })
})
module.exports = router