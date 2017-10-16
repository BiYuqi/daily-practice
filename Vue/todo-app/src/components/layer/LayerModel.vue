<template lang="html">
    <div class="wrapeer">
        <header>测试楼层效果</header>
        <div class="wrapper-inner">
            <ul class="side-bar">
                <li v-for="(item,index) in side" :class="{active: selected === index}" @click="btnLeft(index)">
                    {{ item }}
                </li>
            </ul>
            <div class="wraper-content">
                <div class="wraper-content-item" ref="profile"
                    v-for="(itemBot,index) in sideContent" :style="{ height:itemBot.height }" >
                    {{itemBot.title}} {{index+1}}
                </div>
            </div>
        </div>
        <footer>我是底部</footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            interval:null,
            scrollTop:0,
            selected:0,
            side:['我是标题1','我是标题2','我是标题3','我是标题4','我是标题5'],
            sideContent:[
                {
                    title:'我是楼层',
                    height:Math.floor(Math.random()*200+400) + 'px'
                },
                {
                    title:'我是楼层',
                    height:Math.floor(Math.random()*200+400) + 'px'
                },{
                    title:'我是楼层',
                    height:Math.floor(Math.random()*200+400) + 'px'
                },{
                    title:'我是楼层',
                    height:Math.floor(Math.random()*200+400) + 'px'
                },{
                    title:'我是楼层',
                    height:Math.floor(Math.random()*200+400) + 'px'
                }
            ]
        }
    },
    mounted() {
        window.addEventListener('scroll',this.scrollPage)
    },
    methods:{
        scrollPage() {
            this.scrollTop = window.pageYOffset
            let jump = Array.from(document.querySelectorAll('.wraper-content-item'))
            jump.forEach((v,k)=>{
                if(v.offsetTop - this.scrollTop<= 0){
                    this.selected = k
                }
            })
        },
        btnLeft(index) {

            this.$nextTick(function(){
                let jump = document.querySelectorAll('.wraper-content-item')
                // 获取需要滚动的距离
                let total = jump[index].offsetTop
                let speed = (total-this.scrollTop-80)/20

                this.interval = setInterval(()=> {
                    this.scrollTop += speed
                    if(this.scrollTop*speed >= (total-80)*speed){
                        this.scrollTop = total
                        clearInterval(this.interval)
                        this.selected = index
                    }
                    window.scrollTo(0,this.scrollTop)
                },13)


            })
        }
    }
}
</script>

<style scoped>
    .wrapeer{
        width: 100%;
        min-height: 100%;
        position: relative;
        padding-bottom: 80px;
    }
    .wrapeer-inner{
        width: 800px;
        min-height: 600px;
        margin: 0 auto;
    }
    footer{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 80px;
        width: 100%;
        line-height: 80px;
        font-size: 18px;
        text-align: center;
        background-color: rgb(52, 201, 170);
        color: #fff;
    }
    header{
        height: 80px;
        width: 100%;
        line-height: 80px;
        font-size: 18px;
        background-color: rgb(52, 201, 170);
        color: #fff;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
    }
    .side-bar{
        width: 200px;
        background-color: rgb(51, 193, 207);
        color: #fff;
        position: fixed;
        top: 80px;
        left: 0;
    }
    .side-bar li{
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        text-align: center;
        border-bottom: 1px solid #fff;
        cursor: pointer;
    }
    .side-bar li.active{
        background-color: #fff;
        color: rgb(51, 193, 207);
        font-weight: bold;
    }
    .wraper-content{
        margin-left: 210px;
        margin-top: 80px;
    }
    @media screen and (max-width:800px) {
        .side-bar{
            width: 100px;
            background-color: rgb(51, 193, 207);
            color: #fff;
            position: fixed;
            top: 80px;
            left: 0;
        }
        .wraper-content{
            margin-left: 110px;
            margin-top: 80px;
        }
    }
</style>
