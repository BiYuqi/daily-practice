class Mock {
    constructor() {
        this.boardShow = false // 初始化键盘是否显示
        this.intervalId = null // 定时器
        this.isShowCursor = false // 配合定时器 控制光标显示隐藏
        this.cursor = document.querySelector('.cursor') // 光标
        this.wrapBox = document.querySelector('.mock-wrap') // 模拟input框盒子
        this.boardBox = document.querySelector('.bot') // 模拟的数字键盘
        this.boardSlide = document.querySelector('.title') // 数字键盘收起按钮
        this.itemBtn = document.querySelectorAll('.argue') // 数字按钮集合
        this.remove = document.querySelector('.remove') // 删除
        this.rightArea = document.querySelector('.right-area') // 占位符区域 placeholder
        this.init()
    }
    init() {
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
        }
        // 数字键盘显示隐藏
        this.boardShowSwitch()
        //
        this.bindEventInput()
        //
        this.deleteEle()

        /*--临时测试弹出值--*/
        document.querySelector('.curr-res').onclick = () => this.popValue()
    }
    boardShowSwitch() {
        const { itemBtn, boardBox, boardSlide, wrapBox } = this
        if(!this.boardShow){
            wrapBox.addEventListener('click',()=> {
                boardBox.className = 'bot active'
                this.boardShow = true
                this.startInterval()
            },false)
        }
        boardSlide.addEventListener('click',()=> {
            if(this.boardShow){
                boardBox.className = 'bot'
                this.boardShow = false

                // 看下结果
                this.getInputValue()
            }
        },false)
    }
    bindEventInput() {
        const { itemBtn, boardBox, boardSlide, wrapBox } = this
        const items = Array.from(itemBtn)
        items.forEach((v,k) => {
            v.addEventListener('click', (event)=> {
                this.startInterval()
                // 对小数点进行限制
                const isHasDot = wrapBox.innerHTML.indexOf('.') > -1
                const val = v.innerHTML
                if(isHasDot && val === '.'){
                    return
                }
                this.createEle(val)
            })
        })

        // 右侧区域激活光标
        this.rightArea.addEventListener('click', this.moveCusor.bind(this))

    }
    // 根据点击事件 进行页面处理
    createEle(value) {
        const { wrapBox, cursor } = this

        const space = document.createElement('span')
        space.className = 'space'
        space.addEventListener('click', this.moveCusor.bind(this))

        const span = document.createElement('span')
        span.className = 'val'
        span.innerHTML = value

        /*-----------首次输入小数点 自动补0 --------------*/
        if(wrapBox.children.length === 1 && value === '.'){
            const spaceFirst = document.createElement('span')
            spaceFirst.className = 'space'

            const spanFirst = document.createElement('span')
            spanFirst.className = 'val'
            spanFirst.innerHTML = '0'
            wrapBox.insertBefore(spaceFirst, cursor)
            wrapBox.insertBefore(spanFirst, cursor)
        }
        // 置空占位符
        if(wrapBox.children.length >= 1){
            this.rightArea.innerHTML = ''
        }
        /*----------------------------------------------*/

        wrapBox.insertBefore(space, cursor)
        wrapBox.insertBefore(span, cursor)
    }
    // 移动光标
    moveCusor(event) {
        const { wrapBox, boardBox, cursor } = this
        if(event.currentTarget.className === 'right-area'){
            // 右侧区域单独处理
            if(!this.boardShow){
                boardBox.className = 'bot active'
                this.boardShow = true
                this.startInterval()
            }
            /*
            *   先把光标替换为最后一个元素  此刻页面所有空格值都一一对应
            *   再次把cursor 放进最后即可
            */
            var temp = wrapBox.lastElementChild
            wrapBox.replaceChild( temp, cursor);
            wrapBox.appendChild(cursor)
        }else{
            console.log(event.currentTarget.className)
            var temp = event.currentTarget.nextSibling;
            var ele = wrapBox.replaceChild( event.currentTarget, cursor);
            wrapBox.insertBefore(ele, temp);
        }

    }
    startInterval() {
        const { cursor, intervalId } = this
        if(this.boardShow){
            if(this.intervalId){
                clearInterval(this.intervalId)
            }
            this.intervalId = setInterval(() => {
                this.isShowCursor = !this.isShowCursor
                if(this.isShowCursor){
                    cursor.className = 'cursor'
                }else{
                    cursor.className = 'cursor hidden'
                }
            },800)
        }
    }

    replaceNode() {
        const { wrapBox, cursor } = this
        const spaces = Array.from(document.querySelectorAll('.space'))
        spaces.forEach((v,k) => {
            v.addEventListener('click', (event)=> {
                // 用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。
                wrapBox.replaceChild(cursor, v)
                console.log(wrapBox.replaceChild(cursor, v))
            })
        })
    }

    deleteEle() {
        const {wrapBox, remove, cursor } = this
        remove.addEventListener('click', (event)=> {
            if(wrapBox.children.length === 1){
                this.rightArea.innerHTML = '请在此输入...'
            }
            this.startInterval()
            const target = cursor.previousElementSibling
            if(target !== null){
                const tagetSpace = target.previousElementSibling
                target.parentNode.removeChild(target)
                tagetSpace.parentNode.removeChild(tagetSpace)
            }
        })
    }

    getInputValue() {
        // 结果是
        const values = document.querySelectorAll('.val') &&
                        Array.from(document.querySelectorAll('.val'))
        const res = []
        if(values){
            for(let i=0;i<values.length;i++){
                res.push(values[i].innerHTML)
            }
            console.log("结果是："+res.join(''))
        }
        return ("结果是："+res.join('') || '还未输入')
    }

    popValue() {
        alert(this.getInputValue())
    }

}

const mock = new Mock()
