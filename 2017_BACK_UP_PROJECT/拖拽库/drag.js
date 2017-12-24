class Drags {
    constructor(options) {
        this.options = options
        this.width = document.body.clientWidth || document.documentElement.clientWidth // 视口宽高
        this.height = document.body.clientHeight || document.documentElement.clientHeight// 视口宽高
        this.drag = false // 是否正在拖拽
        this.flag = true //开关
        this.stopX = false //水平锁定
        this.stopY = false //垂直锁定
        this.isRandomParam = this.options.isRandomParam || false // 随机坐标
        /***存储默认坐标信息***/
        this.opData = {
            x:0,
            y:0,
            xx:0,
            yy:0
        }
        /****自定义默认styles******/
        this.customStyles = {
            position: 'absolute'
        }
        this.resetInit()
        this.bindEvent()
    }
    __(el) {
        return document.querySelector(el)
    }
    resetInit() {
        const { options, width, height } = this
        /************设置目标对象******************/
        if(options.el){
            if(typeof options.el === 'string'){
                this.dom = this.__(options.el)
            }else{
                this.dom = options.el
            }
        }else{
            throw ('The el options can not be empty')
        }

        /************目标元素样式*****************/
        const clientRect = this.dom.getBoundingClientRect()
        this.dw = clientRect.width // 目标宽高
        this.dh = clientRect.height // 目标宽高
        this.dt = clientRect.top
        this.dl = clientRect.left
        /************end*****************/

        /************范围控制 check limit******************/
        if(options.limit && options.limit[2] - options.limit[0] > this.dh && options.limit[1] - options.limit[3] > this.dw){
            this.limit = options.limit // 范围控制
        }else{
            this.limit = [0,width,height,0] // limit参数有误，那就默认全屏
        }

        /********自定义styles*************/
        if(this.options.styles){
            const newStyles = Object.assign({},this.options.styles,this.customStyles)
            for(let i in newStyles){
                this.dom.style[i] = newStyles[i]
            }
        }else{
            /*
            *   随机位置 or
            *   不随机位置 默认边界左上角
            **/
            if(this.isRandomParam){
                const randomLeft = Math.random() * (this.limit[1]-this.dw -this.limit[3]) + this.limit[3]
                const randomTop = Math.random() * (this.limit[2]-this.dh - this.limit[0]) + this.limit[0]
                this.dom.style.left = randomLeft + 'px'
                this.dom.style.top = randomTop + 'px'
            }else{
                this.dom.style.left = this.limit[3] + 'px'
                this.dom.style.top = this.limit[0] + 'px'
            }
        }
    }

    bindEvent() {
        const { dom, width, height, limit, opData, dw, dh } = this
        dom.addEventListener('mousedown',(e) => {
            if(!this.drag && this.flag){
                this.drag = true
                opData.x = e.offsetX
                opData.y = e.offsetY
            }
        },false)

        document.addEventListener('mousemove',(e) => {
            e.preventDefault()
            if(this.drag){
                opData.xx = (e.clientX - opData.x)
                opData.yy = (e.clientY - opData.y)

                opData.xx = opData.xx >= (limit[1]-dw) ? (limit[1]-dw) :
                            opData.xx <= limit[3] ? limit[3] : opData.xx
                opData.yy = opData.yy >= (limit[2]-dw) ? (limit[2]-dw) :
                            opData.yy <= limit[0] ? limit[0] : opData.yy
                /*
                *   锁定Y
                *   锁定X
                *   不锁定
                */
                if(this.stopX && !this.stopY){
                    dom.style.top = opData.yy + 'px'
                }else if(this.stopY && !this.stopX){
                    dom.style.left = opData.xx + 'px'
                }else if(!this.stopY && !this.stopX){
                    dom.style.top = opData.yy + 'px'
                    dom.style.left = opData.xx + 'px'
                }
            }
        },false)

        document.addEventListener('mouseup',() => {
            this.drag = false
        },false)
    }

    stop() {
        if(this.flag){
            this.flag = false
            this.dom.style.cursor = 'move'
            return true
        }
    }

    open() {
        if(!this.flag){
            this.flag = true
            this.dom.style.cursor = 'move'
            return true
        }
    }
    lockX() {
        this.stopX = !this.stopX
        return this.stopX
    }
    lockY() {
        this.stopY = !this.stopY
        return this.stopY
    }
    getParam() {
        return {
            left:this.opData.xx,
            top:this.opData.yy
        }
    }


}
