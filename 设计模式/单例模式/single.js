var tpl = `<div class="login">
                <h2>QQ登录</h2>
                <input type="text" placeholder="请输入账号">
                <input type="text" placeholder="请输入账号">
            </div>`

/**
*   @param {one}
*   第一种方案页面加载完毕创建好弹框
*   默认隐藏状态
*   弊端是不一定要登录，浪费
*/
/*
var loginLayer = (function(){
    var div = document.createElement('div')
    div.innerHTML = tpl
    div.className = 'login-wrapper'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
})()

document.querySelector('.test').onclick = function(){
    loginLayer.style.display = 'block'
}
*/

/**
*   @param {two}
*   第二种方案点击登录时创建 惰性单例
*/
var createLoginLayer = function(){
    var div = document.createElement('div')
    div.innerHTML = tpl
    div.className = 'login-wrapper'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
}

// document.querySelector('.test').onclick = function(){
//     var login = createLoginLayer()
//     login.style.display = 'block'
// }

//弊端 每次点击都会创建 关闭时 需要删除节点
// 解决方案 判断是否已经创建
var createLoginLayer2 = (function(){
    var div;
    return function(){
        if(!div){
            div = document.createElement('div')
            div.innerHTML = tpl
            div.className = 'login-wrapper'
            div.style.display = 'none'
            document.body.appendChild(div)
        }
        return div
    }
})()
//document.querySelector('.test').onclick = function(){
    // var login = createLoginLayer2()
    // login.style.display = 'block'
//}


/**
*   @param {...more}
*   通用的单例模式
*/

var getSingle = function(fn){
    var result;
    return function(){
        return result || (result = fn.apply(this,arguments))
    }
}
var createLoginLayer3 = function(){
    var div = document.createElement('div')
        div.innerHTML = tpl
        div.className = 'login-wrapper'
        div.style.display = 'none'
        document.body.appendChild(div)
    return div
}

var create = getSingle(createLoginLayer3)
document.querySelector('.test').addEventListener('click',function(){
    var login = create()
    login.style.display = 'block'
},false)
