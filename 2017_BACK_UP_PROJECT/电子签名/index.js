class Utils{
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
class Elect extends Utils{
    constructor(canvas, degree) {
        super()
        this.degree = degree
        /*************************/
        let { width, height } = window.getComputedStyle(canvas, null);
        width = width.replace('px', '');
        height = height.replace('px', '');
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')
        this.rect = this.getRealRect(this.canvas)
        this.width = width;
        this.height = height;
        /*************************/
        // 优化高分屏
        this.resetCanvas()
        this.resDregree()
        // 默认样式
        this.ctx.lineWidth = 6
        this.ctx.lineJoin = 'round'
        this.ctx.lineCap = 'round'
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
        const width = this.width
        const height = this.height

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

    resDregree() {
        const { degree } = this
        if (typeof degree == 'number') {
            this.ctx.rotate((degree * Math.PI) / 180)
            let height = this.height
            let width = this.width

            switch (degree) {
                case -90:
                    this.ctx.translate(-height, 0);
                    break;
                case 90:
                    this.ctx.translate(0, -width);
                    break;
                case -180:
                case 180:
                    this.ctx.translate(-width, -height);
                    break;
                default:
            }
        }
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


class MakeTest extends Utils{
    constructor() {
        super()
        new Elect(this.dom('canvas'), 0)
        this.test()
    }

    test() {
        const select = this.dom('.select')
        select.addEventListener('change',()=>{
            let degree = ~~select.value
            const w = window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth
            const h = window.innerHeight || d.documentElement.clientHeight || d.body.clientHeight
            let width = w
            let height = h
            let length = (h - w) / 2;
            switch (degree) {
                case -90:
                    length = -length;
                case 90:
                    width = h;
                    height = w;
                    break;
                default:
                    length = 0;
            }
            const styles = {
                transform: `rotate(${degree}deg) translate(${length}px,${length}px)`,
                width: `${width}px`,
                height: `${height}px`,
                transformOrigin: 'center center',
            }

            if(this.dom('.canvas-wrapper')){
                this.dom('.canvas-wrapper').removeChild(document.querySelector('canvas'));
                this.dom('.canvas-wrapper').appendChild(document.createElement('canvas'));
                setTimeout(() => {
                  new Elect(this.dom('canvas'), -degree)
                }, 200);
            }

            for(let i in styles){
                this.dom('.canvas-wrapper').style[i] = styles[i]
            }

        })
    }
}

new MakeTest()
