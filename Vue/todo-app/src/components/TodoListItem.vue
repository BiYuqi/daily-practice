<template lang="html">
    <div class="wrap">
        <div class='ui centered card' v-for="(todo,index) in todos">
            <div class='content-wrap'>
                <div class='header'> {{ todo.title }} </div>
                <div class='meta'> {{ todo.project }} </div>
            </div>
            <div class="attached-wrap">
                <div class='ui bottom attached green basic button' @click="teditor(index)"> 编辑 </div>
                <div class='ui bottom attached green basic button' v-show="todo.done"> 完成 </div>
                <div class='ui bottom attached red basic button' v-show="!todo.done"> 未完成 </div>
            </div>
            <span class='right delete edit icon'>
                <i class='edit icon' @click="tdelete(index)">&times;</i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todos'],
    data() {
        return{

        }
    },
    methods:{
        tdelete(index) {
            this.$emit('deleteList',index)
        },
        teditor(index) {
            this.$emit('editorList',index)
        }
    }
}
</script>

<style lang="css">
.wrap{
    width: 1200px;
    margin: 0 auto;
}
.card{
    width: 23%;
    height: 200px;
    margin: 1%;
    border: 1px solid #ddd;
    float: left;
    padding: 10px;
    position: relative;

}
.attached-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.attached{
    cursor: pointer;
    border:1px solid #eee;
    padding: 4px 6px;
    width: 48%;
    display: inline-block;
    text-align: center;
}
.content-wrap{
    height: 140px;
    text-align: center;
}
.attached:hover{
    background-color: #eee;
}
.delete{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    background-color: #89C989;
    color: #fff;
    cursor: pointer;
    border-radius: 50%;
}
.header{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
}
.meta{

}
</style>
