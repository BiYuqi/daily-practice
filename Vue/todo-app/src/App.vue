<template>
  <div id="app">
    <!-- <router-view/> -->
    <h2 style="text-align:center;" class="active">TODO-LIST</h2>
    <completed-todos></completed-todos>
    <get-todo></get-todo>
    <current-todos></current-todos>
  </div>
</template>

<script>
import GetTodo from '@/components/todo/GetTodo'
import CurrentTodos from '@/components/todo/CurrentTodos'
import CompletedTodos from '@/components/todo/CompletedTodos'
export default {
  name: 'app',
  components: {
      GetTodo,
      CurrentTodos,
      CompletedTodos
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
