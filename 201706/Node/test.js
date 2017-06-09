var http = require('http')
var query = require('querystring')

http.createServer(function(req,res){
    var postData = '';
    req.setEncoding('utf8');
    req.on('data',function(cd){
        postData += cd
    })

    req.on('end',function(){
        res.send(postData)
    })
}).listen(8056)

console.log("服务器刚启动")
