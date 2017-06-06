var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type':'text/plain'
    })
    var params = url.parse(req.url, true).query;
    console.log(params);
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}).listen(8000)
