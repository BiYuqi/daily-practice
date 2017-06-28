<template lang="html">
    <div class="footer">
        <ul class="tab-bar">
            <li v-for="item in items">
                <router-link :to="'/' + item.ad">
                    <div class="nav">
                        <div :class="item.cla"></div>
                        <p>{{item.name}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data () {
        return {
            items: [
                {name:'首页', cla:'ih ispr', ad:'home'},
                {name:'分类', cla:'ic ispr', ad:'classify'},
                {name:'发现', cla:'id ispr', ad:'discover'},
                {name:'购物车', cla:'is ispr', ad:'shop'},
                {name:'我的', cla:'im ispr', ad:'mine'}
            ]
        }
    }
}
</script>

<style lang="css">
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background-color: #fff;
    }
    .tab-bar{
        list-style: none;
        height: 1rem;
        line-height: 1rem;
        border-top: 1px solid #eaeaea;
    }
    .tab-bar li{
        display: inline-block;
        width: 20%;
        height: 1rem;
        text-align: center;
    }
    .tab-bar li a{
        text-decoration: none;
        color: #999;
        padding: .12rem 0;
        display: block;
    }
    .footer nav p{
        font-size: .22rem;
        line-height: .8;
        color: #999;
    }
    .footer .router-link-active{
        color: #F56A00;
    }
    .footer .nav .ispr{
        width: .4rem;
        height: .4rem;
        background-image: url('../assets/img/spr1_5b2e09c.png');
        background-size: .4rem 3.2rem;
        overflow: hidden;
        margin: 0 auto .14rem;
    }
    .footer li>a .nav .ispr.ih{
        background-position: 0 0.4rem;
    }
    .footer li>a .nav .ispr.ic{
        background-position: 0 -0.4rem;
    }
    .footer li>a .nav .ispr.is{
        background-position: 0 2rem;
    }
    .footer li>a .nav .ispr.im{
        background-position: 0 1.2rem;
    }
    .footer li>a .nav .ispr.id{
        background-position: 0 1.2rem;
    }
    .footer li>a.router-link-active .nav .ispr.ih{
        background-position: 0 -2.4rem;
    }
    .footer li>a.router-link-active .nav .ispr.ic{
        background-position: 0 0rem;
    }
    .footer li>a.router-link-active .nav .ispr.is{
        background-position: 0 -0.8rem;
    }
    .footer li>a.router-link-active .nav .ispr.im{
        background-position: 0 1.6rem;
    }
    .footer li>a.router-link-active .nav .ispr.id{
        background-position: 0 1.6rem;
    }
    .footer .nav p{
        font-size: .22rem;
        line-height: .8;
    }
</style>
