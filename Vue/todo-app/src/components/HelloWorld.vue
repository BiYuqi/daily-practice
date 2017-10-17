<template>
  <div id="app">
    <h2 style="text-align:center;" class="active">TODO-LIST</h2>
    <div class="box" @click="$router.push({name:'layer'})">
        <div data-loading="circle-slide"></div>
    </div>
    <completed-todos></completed-todos>
    <get-todo></get-todo>
    <current-todos></current-todos>
    <!-- <swiper-slide></swiper-slide> -->
    <div class="" v-for="item in items" style="text-align:center">
        <span>我是测试数据</span>
    </div>
    <back-top :visibleHeight="50" :rate="6"></back-top>
  </div>
</template>

<script>
import GetTodo from '@/components/todo/GetTodo'
import CurrentTodos from '@/components/todo/CurrentTodos'
import CompletedTodos from '@/components/todo/CompletedTodos'
import BackTop from '@/components/BackTop/BackTop.vue'
import SwiperSlide from '@/components/SwiperSlide'
import '../assets/css/loading.css'
export default {
  components: {
      GetTodo,
      CurrentTodos,
      CompletedTodos,
      BackTop,
      SwiperSlide
  },
  data() {
      return {
          items:Array.from({length:40})
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
    width: 200px;
    height: 100px;
    line-height: 100px;
    margin: 0 auto;
    background-color: rgb(90, 91, 111);
    text-align: center;
}
.box div{
    display: inline-block;
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
</style>
