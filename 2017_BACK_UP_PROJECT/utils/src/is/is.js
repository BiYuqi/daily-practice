export default {
    isArray: function(o){
        return o && Object.prototype.toString.call(o) === '[object Array]'
    },
    isUndefined:function(o){
        return o && Object.prototype.toString.call(o) === '[object Undefined]'
    },
    isObject:function(o){
        return o && Object.prototype.toString.call(o) === '[object Object]'
    }
}
