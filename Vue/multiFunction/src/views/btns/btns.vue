<template>
    <div class="">
        <div class="home-btn-item" v-for="item in start" @click="jump(item.target)">
            <div class="inner">
                <i class="iconfont" :class="item.icon"></i><br>
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            start:[
                {
                    icon: 'icon-huishuaihuansuan',
                    name: '汇率换算',
                    target: 'huilv'
                },
                {
                    icon: 'icon-fangdai',
                    name: '房贷计算',
                    target: 'huilv'
                },
                {
                    icon: 'icon-iconfontgeren',
                    name: '个人所得税',
                    target: 'huilv'
                },
                {
                    icon: 'icon-shuzidaxie',
                    name: '大写数字',
                    target: 'huilv'
                },
                {
                    icon: 'icon-jisuanqiicon',
                    name: '计算器',
                    target: 'huilv'
                },
                {
                    icon: 'icon-iconfontcolor58',
                    name: '科学计算器',
                    target: 'huilv'
                },
                {
                    icon: 'icon-guanxi',
                    name: '亲戚称呼计算',
                    target: 'relative'
                },
                {
                    icon: 'icon-ruler',
                    name: '长度转换',
                    target: 'lencount'
                },
                {
                    icon: 'icon-fangda1',
                    name: '面积转换',
                    target: 'huilv'
                }
            ]
        }
    },
    methods: {
        jump(tar) {
            this.$router.replace({
                name: tar,
                query: {
                    mode: 'modal-out'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/css/mixin.scss';
    .home-btn-item{
        float: left;
        width: 33.333333%;
        height: 4rem;
        border-right: .01rem solid $borderColor;
        border-bottom: .01rem solid $borderColor;
        position: relative;
        cursor: pointer;
        &:nth-child(3n){
            border-right: none;
        }
    }
    .inner{
        @include abs(50%,auto,auto,50%);
        @include trans;
        text-align: center;
        i{
            color: #ece7e7;
            font-size: .8rem;
            margin-bottom: .3rem;
            display: inline-block;
            // transform: scale(0.5);
        }
        span{
            color: $textColor;
            white-space: nowrap;
        }
    }
</style>
