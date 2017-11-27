class Utils{
    constructor() {}
    DPR() {
        if(window.devicePixelRatio && window.devicePixelRatio > 1){
            return window.devicePixelRatio
        }
        return 1
    }
    getRect(dom) {
        return dom.getBoundingClientRect()
    }
}
class Draw extends Utils{
    constructor() {
        super();
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        // 当前dom信息
        this.rect = this.getRect(this.canvas)
        // 优化高分辨率屏幕
        this.resetCanvas()
        // 记录书写轨迹
        this.point = {}
        // 是否开始
        this.press = false
        // 是否是移动设备
        this.isMobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)
        // 初始化数据
        if(!this.isMobile){
            this.ctx.shadowBlur= 2
            this.ctx.shadowColor = 'black'
        }
        this.ctx.lineWidth = 6
        this.ctx.lineJoin = 'round'
        this.ctx.lineJoin = 'round'
        this.ctx.strokeStyle = 'black'
        //
        this.drawMethods()
    }
    resetCanvas() {
        const { rect, canvas, ctx } = this
        const dpr = this.DPR()
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr

        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`

        ctx.scale(dpr, dpr)
    }
    drawMethods() {
        const start = this.create(1)
        const move = this.create(2)
        if(this.isMobile){
            this.canvas.addEventListener('touchstart', start)
            this.canvas.addEventListener('touchmove', move)
        }else{
            this.canvas.addEventListener('mousedown', start)
            this.canvas.addEventListener('mousemove', move)
            this.canvas.addEventListener('mouseup', ()=>{
                this.press = false
            })
        }
    }
    create(sign) {
        const { rect } = this
        const setParam = (e) =>{
            e.preventDefault()
            if(sign === 1){
                this.press = true
            }
            if(sign === 1 || this.press){
                const x = this.isMobile ? e.touches[0].clientX : e.clientX
                const y = this.isMobile ? e.touches[0].clientY : e.clientY
                this.point.x = x - rect.left + 0.5
                this.point.y = y - rect.top + 0.5
                this.paint(sign)
            }
        }
        return setParam
    }
    paint(sign) {
        const { ctx } = this
        switch (sign) {
            case 1: // 开始路径
                ctx.beginPath()
                ctx.moveTo(this.point.x,this.point.y)
            case 2: // 前面之所以没有break语句，是为了点击时就能描画出一个点
                ctx.lineTo(this.point.x,this.point.y)
                ctx.stroke()
                break;
            default:
        }
    }
}

new Draw()
