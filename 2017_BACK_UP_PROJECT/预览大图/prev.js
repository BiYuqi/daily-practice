(function(window){
    function PrevImg(obj) {
        this.data = obj;
        console.log(this.data)
    }
    function $(el){
        return document.querySelector(el)
    }
    function $$(el){
        return document.querySelectorAll(el)
    }
    PrevImg.prototype = {
        constructor:PrevImg,
        index:0,
        lockWrap:$('#box1'), // 被预览图片的盒子
        AllImgs: $$('#box1 img'), // 所有的图片
        _next:$('.next-btn'), // 下一张
        _prev:$('.prev-btn'), // 上一张
        _prevIMgBox:$('.prev-show img'), // 模态框里面显示大图片
        _prevModelBox:$('#prev-model'),
        init:function(){
            console.log(this._next)
            this.renderStart();
            this.prevNext();
            this.prevBtn();
        },
        getIndex:function(arr,target){
            for(var i=0;i<arr.length;i++){
                if(arr[i] == target){
                    return i
                }
            }
        },
        renderStart:function(){
            var that = this
            this.lockWrap.addEventListener('click',function(e){
                if(e.target.nodeName == "IMG"){
                    that.index = that.getIndex(that.AllImgs,e.target)
                    that._prevModelBox.style.display = 'block'
                    that._prevIMgBox.setAttribute('src',e.target.getAttribute('src'))
                }
            },false)

            document.addEventListener('click',function(e){
                if(e.target.className == 'prev-corver'){
                    that._prevModelBox.style.display = 'none'
                }
            },false)
        },
        prevNext:function(){
            var that = this
            this._next.addEventListener('click',function(){
                that.index++
                if(that.index > that.AllImgs.length -1 ){
                    that.index = that.AllImgs.length -1
                    return;
                }
                that._prevIMgBox.setAttribute('src',that.AllImgs[that.index].getAttribute('src'))
            },false)
        },
        prevBtn:function(){
            var that = this
            this._prev.addEventListener('click',function(){
                that.index--
                if(that.index < 0 ){
                    that.index = 0
                    return;
                }
                that._prevIMgBox.setAttribute('src',that.AllImgs[that.index].getAttribute('src'))
            },false)
        }
    }
    window._prevImg = function(obj){
        return new PrevImg(obj).init()
    }
})(window)
