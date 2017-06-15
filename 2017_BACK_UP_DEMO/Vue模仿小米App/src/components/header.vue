<template lang="html">
    <div class="index-header" v-bind:class="{ active:this.$store.state.sh.cView}">
        <slot name="left"></slot>
        <div class="search_bar">
            <router-link :to="'/search/index'">
                <span class="text" @click="search">搜索商品名称</span>
            </router-link>
        </div>
        <div class="login" v-if="!user.id">
            <router-link :to="'/login'">
                <div class="text">登录</div>
            </router-link>
        </div>
        <div class="login" v-else>
            <router-link :to="'/message'">
                <div class="text">{{user.id}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'
    export default {
        data () {
            return {
                token:true
            }
        },
        methods:{
            ...mapActions(['changeView','backView']),
            search () {
                // console.log(this.token);
            }
        },
        mounted () {
            if(this.$store.state.user.id){
                this.token = false;
            }
        },
        computed:mapState({ user:state => state.user })
    }
</script>

<style>
    .index-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: .15rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .index-header .search_bar{
        line-height: .34rem;
        background: url('http://m.mi.com/component/header/img/search_bfba941.png') no-repeat;
        background-size: 101% 101%;
        width: 5.2rem;
        height: .53rem;
        border-radius: .05rem;
    }
    .index-header .search_bar>a{
        display: block;
        padding: .12rem .6rem .1rem;
    }
    .index-header .search_bar .text{
        font-size: .26rem;
        color: rgba(0,0,0,.3);
    }
    .index-header .login{
        display: block;
        white-space: nowrap;
        box-sizing: border-box;
        text-align: center;
    }
    .index-header .login .text{
        font-size: .28rem;
        text-align: center;
        color: #fff;
        margin: 0 .22rem;
    }
</style>
