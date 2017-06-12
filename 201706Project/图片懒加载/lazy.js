(function(win){
    function lazy(obj){
        this.obj = obj;
    }
    lazy.prototype = {
        init:function(){
            this.renderLazy()
            this.setCss()
            this.scrolls()
        },
        setCss:function(){
            var cssCode = '\
                img.show{\
                    animation: fadeIn '+this.obj.time+'s linear;\
                    -webkit-animation: fadeIn '+this.obj.time+'s linear;\
                    -ms-animation: fadeIn '+this.obj.time+'s linear;\
                    -moz-animation: fadeIn '+this.obj.time+'s linear;\
                }\
                @keyframes fadeIn {\
                    from {opacity: 0;}\
                    to {opacity: 1;}\
                }\
                @-webkit-keyframes fadeIn {\
                    from {opacity: 0;}\
                    to {opacity: 1;}\
                }\
                @-moz-keyframes fadeIn {\
                    from {opacity: 0;}\
                    to {opacity: 1;}\
                }\
                @-ms-keyframes fadeIn {\
                    from {opacity: 0;}\
                    to {opacity: 1;}\
                }';
            var style = document.createElement('style');
                style.type = 'text/css';
            if(style.styleSheet){
                //IE
                style.styleSheet.cssText = cssCode;
            }else{
                //others
                style.innerHTML = cssCode;
            }
            document.getElementsByTagName("head")[0].appendChild(style);
        },
        addClass:function(elem,cName){
            var reg = new RegExp('(^|\\s)' + cName+ '(\\s|$)');
            if(!reg.test(elem.className)){
                elem.className += '' + cName;//有个空格
            }
        },
        $elem:function(el){
            return document.querySelectorAll(el);
        },
        renderLazy:function(){
            var imgs = this.$elem(this.obj.img);
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                client = document.documentElement.clientHeight;
            var len = imgs.length,
                sn = 0;
            for(var i=sn;i<imgs.length;i++){
                if(imgs[i].offsetTop < scrollTop + client){
                    imgs[i].src = imgs[i].getAttribute('data-img')
                    this.addClass(imgs[i],'show')
                    sn = i+1
                }
            }
        },
        throttle:function(delay,time,fn){
            var startTime = new Date().getTime(),
                timer = null;
            return function(){
                var currTime = new Date().getTime(),
                    that = this,
                    args = arguments;
                clearTimeout(timer)
                if(currTime - startTime > delay){
                    fn.apply(this,args)
                    startTime = currTime
                }else{
                    timer = setTimeout(function(){
                        fn.apply(that,args)
                    },time)
                }

            }
        },
        scrolls:function(){
            var that = this;
            window.addEventListener('scroll',this.throttle(300,100,function(){
               that.renderLazy();
           }),false)
        }
    }

    win._lazy = function(obj){
        return new lazy(obj).init()
    }
})(window)
