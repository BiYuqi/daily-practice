var fs = require('fs');

fs.readFile('input.txt',function(err,res){
    if(err) return console.log(err);
    console.log(res.toString());
})

console.log("程序执行结束")
