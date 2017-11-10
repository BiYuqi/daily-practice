var http = require('http');

http.createServer(function(req,res){
    //发送和http头部
    //状态吗 200 ok
    //内容类型： text/plain
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });

    res.end("Hello World");
}).listen(8888);

console.log("已启动")
