// 表单自动化工具
var _validator = (function(){
    // 构造表单策略对象
    return function(ruleList){
        return {
            strategyFn:[],
            ruleList:ruleList,
            add:function(dom,rules){
                var that = this;
                for(var i=0,len = rules.length;i<len;i++){
                    (function(i){
                        that.strategyFn.push(function(){
                            var info = [];
                            var method = rules[i].strategy.split(":"),
                                methodName = method[0],
                                errMsg = rules[i].msg,
                                val = dom.value;
                            info.push(val);
                            if(method[1]){
                                info.push(method[1])
                            }
                            info.push(errMsg);
                            return that.ruleList[methodName].apply(dom,info)
                        })
                    })(i)
                }
            },
            start:function(){
                for( i in this.strategyFn){
                    if(this.strategyFn.hasOwnProperty(i)){
                        var msg = this.strategyFn[i]();
                        if(msg){
                            return msg
                        }
                    }
                }
            }
        }
    }
})()

/**
* @param 时间格式化工具 支持类似于下面格式
* @param {String} {fmt} _format("YYYY-MM-DD hh:mm:ss")  年-月-日 时-分-秒
* @param {String} {fmt} _format("YYYY-MM-DD")    年月日
* @param {String} {fmt} _format("YYYY/MM/DD")    年月日
* @param {String} {fmt} _format("YYYY年MM月DD日 hh时mm分ss秒") 年月日时分秒
* @param {Number} {times} 时间戳  格式化指定时间 (可选) 已做兼容 非number亦可
*/
var _dateFormat = function(fmt,times){
    var date = times !== undefined ? new Date(parseInt(times)) : new Date()
    var _time = {
        "Y+" : date.getFullYear(),
        "M+" : date.getMonth() + 1,
        "D+" : date.getDate(),
        "h+" : date.getHours(),
        "m+" : date.getMinutes(),
        "s+" : date.getSeconds()
    }
    for(var i in _time){
        var reg = new RegExp(''+i+'','g');
        if(reg.test(fmt)){
            fmt = fmt.replace(reg,(_time[i]+'').length == 1 ? ('00'+_time[i]).substr(-2) : _time[i])
        }
    }
    return fmt
}

/**
* ajax请求参数优雅拼接
* @param {object} 键值对
*   {
*       id:'',
*       type:'string'
*   }
*/
var _requireParam = function(obj){
    var rangeArr = [],
        param = '';
    if(obj && typeof obj == 'object'){
        if(rangeArr.length == 0){
            rangeArr.push('?')
        }
        for(i in obj){
            if(obj.hasOwnProperty(i)){
                if(obj[i] !== ''){
                    rangeArr.push(i)
                    rangeArr.push('=')
                    rangeArr.push(obj[i])
                    rangeArr.push('&')
                }
            }
        }
        param = rangeArr.join('').replace(/&$/,'')
        return param
    }
}

/**
* 自动解析地址栏参数
* 以对象(键值对)的形式返回
* @param {string} url 可选 默认地址栏地址
*/
var _getParam = function(url){
    var param,
        m,
        res = {},
        param = url == null ? window.location.href : url,
        paramReg = /([^?&=]+)=([^?&=]+)/gi,
        param = param.substr(param.indexOf('?')+1);
        while(m = paramReg.exec(param)){
            res[m[1]] = m[2]
        }
    return res
}

/**
* is系列 判断是否是 对象 数组
* @param {string} ig 大小写皆可
*/
var _is = function(obj){
    return function(type){
        type = type.replace(/(^[a-zA-Z])(\w+)/,function(m,n,q){
            return n.toUpperCase()+q
        })
        return Object.prototype.toString.call(obj) === '[object '+type+']'
    }
}

/**
* 过滤空的数组或者对象
* @param data {Array} {object}
*/
var _filterData = function(data){
    var arr = [],
        obj = {},
        msg = '数据类型只接受数组或者对象';
    if(data && data.length <= 0){
        return
    }
    if(_is(data)('object')){
        for(k in data){
            if(data.hasOwnProperty(k)){
                if(data[k] !== ''){
                    obj[k] = data[k]
                }
            }
        }
        return obj;
    }
    if(_is(data)('array')){
        var len = data.length
        for(var i=0;i<len;i++){
            if(data[i] !== ''){
                arr.push(data[i])
            }
        }
        return arr;
    }
    return msg
}

/**
* 合并对象
* @param {Object}
*/
var _mergeObj = function(){
    var objs = [].slice.call(arguments),
        newObj = {};
    for(var i=0;i<objs.length;i++){
        var sinObj = objs[i];
        if(sinObj !== false){
            for(k in sinObj){
                if(sinObj.hasOwnProperty(k) && !newObj.hasOwnProperty(k)){
                    newObj[k] = sinObj[k]
                }
            }
        }
    }
    return newObj
}

/**
*   _getRandom 获取随机数
*   _getRandomArr 获取随机数组数据
* @param {min} Number
* @param {max} Number
*/
var _getRandom = function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

var _getRandomFormArr = function(arr){
    var msg = '数据类型只接受数组或者对象';
    if(_is(arr)('array')){
        return arr[Math.floor(Math.random()*arr.length)]
    }
    return msg
}

/**
* @param {string} dom 错误信息dom
* @param {string} msg 错误提示信息
* @param {string} timer 错误显示时间 毫秒 可选
* @param {function} fn 回调函数 可选
*/
var _errTips = function(dom,msg,timer,fn){
    var domTarget = document.querySelector(dom),
        timer = timer || 1500;
    return function(){
        domTarget.innerHTML = msg
        setTimeout(function(){
            domTarget.innerHTML = ''
            fn && fn()
        },timer)
    }()
}

/**
* 防抖函数
* @param {number} delay 延时时间 毫秒
* @param {function} fn 回调函数
*/
var _debounce = function(delay,fn){
    var timer = null;
    return function(){
        var that = this,
            args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function(){
            fn.apply(that,args)
        },delay)
    }
}
/**
* 节流函数
* @param {number} delay 间隔时间，单位毫秒
* @param {function} fn 回调函数
* @param {number} times 延迟时间，单位毫秒
*/
var _throttle = function(delay,times,fn){
    var startTime = new Date().getTime(),
        timer = null;
    return function(){
        var currTime = new Date().getTime(),
            that = this,
            args = arguments;
        clearTimeout(timer)
        if(currTime - startTime > delay){
            fn.apply(that,args)
            startTime = currTime
        }else{
            timer = setTimeout(function(){
                fn.apply(that,args)
            },times)
        }
    }
}

/**
*  @param {}  console.log() 自定义监控控制台打印数据
*  @param {} 上线时可关闭所有控制台打印的数据 (注释return返回的数据即可关闭)
*/
var _log = function(){
    return console.log.apply(null,arguments)
}
