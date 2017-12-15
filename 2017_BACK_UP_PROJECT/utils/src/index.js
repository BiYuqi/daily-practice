import {
    isBrower,
    format
} from './modules/simple';
import Cookie from './Cookie/Cookie';
import is from './Is/Is'
import Emmit from './Event/Event'
import shuffle from './modules/shuffle'
import { bstoblob } from './FileCanvas/bs2blob'

const log = (...con) =>{
    console.log.apply(null, con)
}

log(isBrower().firefox)
log(format('YY-MM-DD hh:mm:ss'))

// Cookie.set('info','kkkkkk',9)
log(Cookie.get('info'))
Cookie.del('info')
log('-------------is系列---------')
log(is.isArray([]))
log(is.isUndefined())
log(is.isObject({}))
log('-------------is系列---------')
log('-------------Event-Emmit系列---------')
const Event = new Emmit()
const fn1 = function(d){
    log('事件触发=>打印数据:')
    log(d)
}
// 监听
Event.on('save', fn1)
// 触发
Event.trigger('save', {"name":"123"})
// 关闭
log('关闭事件--------')
Event.off('save',fn1)
//
log('检验事件是否删除')
log(Event.clientList.save)

log('--------------Event-Emmit系列---------')


// -----------继承-Emmit------------------

class NewEmmit extends Emmit{
    constructor() {
        super()
    }
}

const newEmmit = new NewEmmit()
newEmmit.on('loading',function(data){
    log(data)
})
newEmmit.trigger('loading',{"status":200})
log(newEmmit)

log('-----------------测试once事件----------------------')
newEmmit.once('test-once',function(d){
    console.log(d)
})
let a = 0
document.querySelector('.once').onclick = function(){
    a++
    newEmmit.trigger('test-once',"发送once事件"+a)
}
log('-----------------测试once事件-end---------------------')

log('--------------shuffle----------')
document.querySelector('.shuffle').onclick = function(){
    log(shuffle([1,2,3,4,5,6,7]))
}

document.querySelector('input').onchange = function(){
    const file = this.files[0]
    const reader = new FileReader()
    reader.onload = function(){
        console.log(bstoblob(this.result))
        const img = document.createElement('img')
        img.src = window.URL.createObjectURL(bstoblob(this.result))
        document.body.appendChild(img)
    }
    reader.readAsDataURL(file)
}
