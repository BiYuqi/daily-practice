function _debounce(fn,delay){
    var timer = null;
    return function(){
        var args = arguments,
            that = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(that,args);
        },delay)
    }
}
