<template>
    <div id="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
    import Tabbar from '@/components/bottomBar'
    // import { mapMutations } from 'vuex'
    export default {
      name: 'app',
      components: {
          Tabbar
      },
      data () {
          return {

          }
      }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-size: .2rem;
        height: 100%;
    }
    html{
        height: 100%;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    .home-page .active{
        background-color: rgb(229, 131, 53);
        animation:headerBg .5s linear;
    }
    .index-header{
        background-color: inherit;
    }
    @keyframes headerBg {
        from {
            background-color: rgba(229, 131, 53,0);
        }
        to {
            background-color: rgba(229, 131, 53,1);
        }
    }
    #wrapper {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        margin: 0 auto;
        z-index: 2;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
    /*#wrapper::-webkit-scrollbar{
        width: 0px;
        background-color: #F5F5F5;
    }
    #wrapper::-webkit-scrollbar-thumb{
        background-color: #C1C1C1;
    }
    #wrapper::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }*/

</style>
