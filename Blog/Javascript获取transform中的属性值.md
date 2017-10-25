## Javascript获取transform中的属性值
```js
const $ = function(el){
    return document.querySelector(el)
}
const getStyle = function(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj)[attr]
}
const getTransform = function(data){
    const reg = /matrix\((.*)\)/
    const result = reg.exec(data)[1].split(',')
    return {
        transX: parseInt(result[result.length-2]),
        transY: parseInt(result[result.length-1])
    }
}
getTransform(getStyle($('.box'),'transform'))
// {transX: -4, transY: -8}
```
