<template>
  <div id="app">
    <!-- <router-view/> -->
    <h2 style="text-align:center;" class="active">TODO-LIST</h2>
    <div class="box">
        <i></i>
        <i></i>
        <i></i>
    </div>
    <completed-todos></completed-todos>
    <get-todo></get-todo>
    <current-todos></current-todos>
    <swiper-slide></swiper-slide>
    <div class="" v-for="item in items" style="text-align:center">
        <span>我是测试数据</span>
    </div>
    <back-top :visibleHeight="800" :rate="6"></back-top>
  </div>
</template>

<script>
import GetTodo from '@/components/todo/GetTodo'
import CurrentTodos from '@/components/todo/CurrentTodos'
import CompletedTodos from '@/components/todo/CompletedTodos'
import BackTop from '@/components/BackTop.vue'
import SwiperSlide from '@/components/SwiperSlide'
export default {
  name: 'app',
  components: {
      GetTodo,
      CurrentTodos,
      CompletedTodos,
      BackTop,
      SwiperSlide
  },
  data() {
      return {
          items:Array.from({length:100})
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
.box{
    width: 60px;
    height: 60px;
    margin: 0 auto;
    /*background-color: #000;*/
    position: absolute;
    top: 12%;
    left: 58%;
    transform: translate(0%,0%);
}
.box i{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #45dde7;
    opacity: .8;
    border-radius: 50%;
    animation: loading 1.25s 0s infinite cubic-bezier(.21,.53,.56,.8);
    /*cubic-bezier(.21,.53,.56,.8)*/
}
.box i:nth-child(1) {
    animation-delay: 0s;
    -webkit-animation-delay: 0s
}

.box i:nth-child(2) {
    animation-delay: .2s;
    -webkit-animation-delay: .2s
}

.box i:nth-child(3) {
    animation-delay: .4s;
    -webkit-animation-delay: .4s
}
@keyframes loading {
    0% {
        transform: scale(.1);
        opacity: 1
    }

    70% {
        transform: scale(1);
        opacity: .7
    }

    100% {
        opacity: 0
    }
}
html,body{
    height: 100%;
    width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  position: relative;

}
</style>
