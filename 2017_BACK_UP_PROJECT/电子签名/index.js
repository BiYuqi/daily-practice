class Dom{
    constructor() {

    }
    dom(el) {
        return document.querySelector(el)
    }
    log(...arg) {
        console.log.apply(this,arg)
    }
    DPR() {
        if(window.devicePixelRatio && window.devicePixelRatio > 1){
            return window.devicePixelRatio
        }
        return 1
    }
    getRealRect(dom) {
        return dom.getBoundingClientRect()
    }

}
class Elect extends Dom{
    constructor() {
        super()
        this.canvas = this.dom('#canvas')
        this.ctx = this.canvas.getContext('2d')
        this.rect = this.getRealRect(this.canvas)
        // 优化高分屏
        this.resetCanvas()
        // 默认样式
        this.ctx.lineWidth = 6
        this.ctx.lineJoin = 'round'
        this.ctx.strokeStyle = 'black'
        /*************************************/
        // 下载的时候防止黑背景
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        /*************************************/
        // 记录书写轨迹
        this.point = {}
        // 是否开始
        this.press = false
        // 是否是移动设备
        this.isMobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)
        // 移动端优化
        if(!this.isMobile){
            this.ctx.shadowBlur= 2
            this.ctx.shadowColor = 'black'
        }
        this.bindEvent()

    }

    resetCanvas() {
        const { canvas, ctx, rect } = this

        const DPR = this.DPR()
        const width = rect.width
        const height = rect.height

        canvas.width = width * DPR
        canvas.height = height * DPR

        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`

        ctx.scale(DPR,DPR)
    }

    drawLine(sign) {
        const { ctx } = this

        switch (sign) {
            case 1:
                ctx.beginPath()
                ctx.moveTo(this.point.x, this.point.y)
            case 2:
                ctx.lineTo(this.point.x, this.point.y)
                ctx.stroke()
                break;
            default:
        }
    }

    createAction(sign) {
        const { rect } = this
        const setParam = (e) => {

            if(sign === 1){
                this.press = true
            }
            if(sign === 1 || this.press){
                const x = this.isMobile ? e.touches[0].clientX : e.clientX
                const y = this.isMobile ? e.touches[0].clientY : e.clientY

                this.point.x = x - rect.left + 0.5
                this.point.y = y - rect.top + 0.5
                this.drawLine(sign)

                e.preventDefault()
            }
        }
        return setParam
    }

    bindEvent() {
        const start = this.createAction(1)
        const move = this.createAction(2)

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

        this.dom('button').addEventListener('click',()=>{

            // var img = document.createElement('img')
            // img.src = this.canvas.toDataURL('image/jpeg')
            // img.width = this.rect.width
            // img.height = this.rect.height
            // document.body.appendChild(img)
            function downLoad(data,filename = Date.now()){
                const a = document.createElement('a')
                a.href = data.toDataURL('image/jpeg')
                a.download = filename
                a.click()
            }
            downLoad(this.canvas)
        })
    }


}
new Elect()
