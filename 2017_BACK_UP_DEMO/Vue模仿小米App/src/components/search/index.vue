<template lang="html">
    <div class="page-search">
        <div class="header">
            <div class="left">
                <a href="javasxript:;" @click="back"></a>
            </div>
            <div class="tit">
                <div class="searchword">
                    <input autofocus="autofocus" v-model="searchValue">
                </div>
            </div>
            <div class="searchlabel" @click="searchBtn">搜索</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                searchValue:''
            }
        },
        methods:{
            searchBtn () {
                if(this.searchValue.length <= 0){
                    return;
                }else{
                    console.log("点击事件生效")
                }
            },
            back () {
                this.$router.go(-1)
            }
         }
    }
</script>

<style scoped>
    .page-search{
        width: 100%;
        height: 100%;
        color: #999;
    }
    .page-search .header{
        position: fixed;
        top: 0;
        left: 0;
        height: 1rem;
        width: 100%;
        z-index: 10;
        background: #F5F5F5;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .header .left{
        /*margin-left: .2rem;*/
    }
    .header .left a{
        color: #999;
        display: block;
        width: .5rem;
        height: .5rem;
        background: url('../../assets/img/home.png') no-repeat;
        background-size: cover;
        /*background-position: 0 0.4rem;*/
    }
    .page-search .header .tit{
        /*margin-left: .2rem;*/
    }
    .page-search .header .searchword{
        border: 1px solid #ddd;
        padding: .1rem .2rem;
        background: #FFF;
        width: 5.4rem;
    }
    .tit .searchword input{
        width: 100%;
        border: 0 none;
        font-size: .3rem;
        font-weight: 400;
        outline: none;
    }
    .searchlabel{
        /*margin-left: .1rem;*/
        font-size: 0.24rem;
        width: .6rem
    }
</style>
