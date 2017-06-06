(function(window){
    function $(els){
        this.el =  document.querySelector(els);
        return this;
    }
    $.prototype = {
        attr:function(els,val){
            if(!val){
                return this.el.getAttribute(els);
            }else{
                return this.el.setAttribute(els,val);
            }
            return this;
        },
        hide:function(){
            this.el.style.display = 'none';
            return this;
        },
        css:function(eles){
            if(typeof eles === 'object'){
                for(i in eles){
                    this.el.style[i] = eles[i];
                }
            }else{
                console.log('The value must be Object')
            }

            return this;
        },
        on:function(type,fn,choose){
        	//给choose赋初值
        	choose = choose || false;
            if(arguments.length < 2){
        		return ;
        	}
        	//判断浏览器是否支持addEventListener
        	if(this.el.addEventListener){
        		this.el.addEventListener(type,fn,choose);
        	}else {
        		this.el.attachEvent('on'+type , fn , choose);
        	}
            return this;
        },
        val:function(val){
            if(!val){
                return this.el.value;
            }
            if(val.length > 0){
                return this.el.value = val;
            }
            return this;
        },
        html:function(val){
            if(!val){
                return this.el.innerText;
            }
            if(val.length > 0 && typeof val === 'string'){
                return this.el.innerHTML = val;
            }
            if(val === '' && val.length == 0){
                return this.el.innerText = '';
            }
            return this;
        }


    }
    window.$ = function(els){
        return new $(els)
    }
})(window)
