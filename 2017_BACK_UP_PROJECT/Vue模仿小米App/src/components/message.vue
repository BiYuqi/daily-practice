<template lang="html">
    <div class="mess-wrapper">
        <header>
            <span @click="back"><</span><span>消息中心</span>
        </header>
        <div class="message">
            <div class="list-item" v-for="(item,index) in mess" :key="index" @click="toggle(index)">
                <div class="list-left">
                    <p class="l-title">{{item.title}}</p>
                    <p class="l-con">{{item.con}}</p>
                    <p style="color:#999">{{item.time}}</p>
                </div>
                <div class="list-right"></div>
                <span v-show="item.show" class="star" :style="{background:item.color}"></span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                mess:null
            }
        },
        methods:{
            back () {
                //this.$router.replace({path:'/home'})
                this.$router.go(-1)
            },
            toggle (index) {
                this.mess[index].show = !this.mess[index].show;
            }
        },
        mounted () {
            var that = this;
            this.$http.get('http://localhost:8080/static/data/message.json')
                        .then((response) => {
                            that.mess = response.data;
                        })
        }
    }
</script>

<style scoped>
    .mess-wrapper{
        width: 100%;
        height: 100%;
        background-color: #f7f7f7;
    }
    header{
        height: .8rem;
        line-height: .8rem;
        background-color: #fff;
    }
    header span:nth-child(1){
        width: .6rem;
        display: inline-block;
        text-align: center;
    }
    .message{
        padding: 0.3rem .2rem .3rem .6rem;
    }
    .list-item{
        height: 1.5rem;
        padding: .2rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        box-sizing: border-box;
        background-color: #fff;
        margin-bottom: .3rem;
        position: relative;
    }
    .list-item .star{
        display: block;
        width: .12rem;
        height: .12rem;
        border-radius: 50%;
        background-color: #c33;
        position: absolute;
        left: -.3rem;
        top: 35%;
        z-index: 666;
    }
    .list-item .star:after{
        content: '';
        display: block;
        width: 0.01rem;
        height: .5rem;
        background-color: #eee;
        position: absolute;
        top: -.5rem;
        left:0.06rem;
        z-index:500;
    }
    .list-item .star:before{
        content: '';
        display: block;
        width: 0.01rem;
        height: 1.2rem;
        background-color: #eee;
        position: absolute;
        top: .1rem;
        left:0.06rem;
        z-index:500;
    }
    .list-left{
        width: 80%;
    }
    .list-right{
        width: 20%;
    }
    .l-title{
        color: #333;
        font-size: .14rem;
    }
    .l-con{
        overflow: hidden;
        text-overflow: ellipsis;
        color: #999;
    }
</style>
