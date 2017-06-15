<template lang="html">
    <div class="home-page" v-scroll="onScroll">
        <Headers>
            <div class="logo" slot="left">
                <img src="http://m.mi.com/component/header/img/logo_e6453b2.png">
            </div>
        </Headers>
        <Slider/>
        <First/>
        <Tabbar/>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Slider from '@/components/slider'
    import Headers from '@/components/header'
    import Tabbar from '@/components/bottomBar'
    import First from '@/components/homepage/first'
    export default {
        components: {
            Slider,
            Headers,
            Tabbar,
            First
        },
        data () {
            return {
                position: {scrollTop: 0, scrollLeft: 0}
            }
        },
        methods:{
            ...mapMutations(['changeView','backView']),
            onScroll:function(e, position){
              this.position = position;
              //打印变量状态
            //   console.log(this.position.scrollTop)
              if(this.position.scrollTop > 250){
                  if(this.$store.state.sh.cView == false){
                      this.changeView();
                  }
              }else{
                  this.backView();
              }
            }
        }
    }
</script>

<style scoped>
    .home-page{
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .home-page::-webkit-scrollbar{
        width: 0px;
        background-color: #F5F5F5;
    }
    .home-page::-webkit-scrollbar-thumb{
        background-color: #C1C1C1;
    }
    .home-page::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    .index-header .logo{
        width: 1rem;
        padding: 0 .25rem;
        box-sizing: border-box;
    }
    .index-header .logo img{
        width: .5rem;
        height: auto;
    }
</style>
