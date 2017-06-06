var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var fs = require('fs');

var app = express();

app.get('/',function(req,res){
    superagent.get('http://loadingmore.com/vuenotes')
            .end(function(err,data){
                if(err){
                    return next(err);
                }

                var $ = cheerio.load(data.text);
                var items = [];


                $('.main-mod-con a').each(function(k,v){
                    var els = $(v);
                    console.log(els)
                    items.push({
                        title:els.text(),
                        href:els.attr('href')
                    })
                })
                fs.writeFile('beautil.json', JSON.stringify(items), function (err) {
                   if (err) throw err;
                   console.log('数据已保存～');
                });
                res.send(items);
            })
})

app.listen(3000,function(){
    console.log("dsfsfd")
})
