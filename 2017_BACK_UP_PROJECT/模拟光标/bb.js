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
        /***
        *   分为两种情况 一种是点击右侧占位符区域 锁定光标为最后
        *   第二种就是正常的切换光标位置
        */
        if(event.currentTarget.className === 'right-area'){
            // 右侧区域单独处理
            if(!this.boardShow){
                boardBox.className = 'bot active'
                this.boardShow = true
                this.startInterval()
            }
            /*
            *   先把光标替换为最后一个元素(该情况下光标不在最后)  替换后此刻页面所有空格值都一一对应
            *   再次把cursor 放进最后即可
            */
            var temp = wrapBox.lastElementChild
            wrapBox.replaceChild( temp, cursor);
            wrapBox.appendChild(cursor)
        }else{
            // console.log(event.currentTarget.className)
            var temp = event.currentTarget.nextSibling;
            var ele = wrapBox.replaceChild( event.currentTarget, cursor);
            wrapBox.insertBefore(ele, temp);
        }

    }
    startInterval() {
        const { cursor } = this
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
            },700)
        }
    }

    deleteEle() {
        const {wrapBox, remove, cursor } = this
        remove.addEventListener('click', (event)=> {
            if(wrapBox.children.length === 1){
                this.rightArea.innerHTML = '请在此输入...'
            }
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
        }
        return ("结果是："+(res.join('') || '还未输入'))
    }

    popValue() {
        alert(this.getInputValue())
    }

}

new Mock()
