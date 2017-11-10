---
title: 《你不知道的jsvascript》
date: 2017-01-23 11:30:12
tags: [javascript,"作用域"]
categories: Javascript
---
### 看段代码
```javascript
function foo(a){
    var b = 2;
    // somecode
    function bar(){
        // somecode
    }
    //somecode
    var c = 3;
    
}
```
函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复
用（事实上在嵌套的作用域中也可以使用）
