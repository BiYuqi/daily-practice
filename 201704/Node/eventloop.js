var events = require('events');

var eventEmitter = new events.EventEmitter();


eventEmitter.on('test',function (){
    console.log("连接成功");
    //
    eventEmitter.emit('data_recive')
});

eventEmitter.on('data_recive',function(){
    console.log("数据接收成功")
})
eventEmitter.emit('test');

console.log("程序执行完毕")
