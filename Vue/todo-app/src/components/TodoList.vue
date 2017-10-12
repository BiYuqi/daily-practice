<template lang="html">
    <div class="">
        <todo-list :todos="todos" @deleteList="deleteListF" @editorList="editorBtn"></todo-list>
        <div class="v-modal-wrap" v-if="isShow">
            <div class="cover"></div>
            <div class="form">
                <div class="">
                    <input type="text" class="input"  placeholder="请输入计划名称" v-model="form.title">
                </div>
                <div class="">
                    <input type="text" class="input" placeholder="请输入项目名称" v-model="form.project">
                </div>
                <input type="radio" id="one" value="0" v-model="picked">
                <label for="one">已完成</label>
                <br>
                <input type="radio" id="two" checked = "true" value="1" v-model="picked">
                <label for="two">未完成</label>
                <br>
                <div class="btn" @click="closeSure">确认修改</div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from '@/components/ToDoListItem'
// import MyModal from '@/components/MyDialog'
export default {
    data() {
        return{
            isShow:false,
            currentIndex:null,
            picked:'0',
            form:{
                title:'',
                project:'',
                done:false
            },
            todos: [
                {
                    title: 'Todo A',
                    project: 'Project A',
                    done: true,
                },
                {
                    title: 'Todo B',
                    project: 'Project B',
                    done: false,
                },
                {
                    title: 'Todo C',
                    project: 'Project C',
                    done: false,
                },
                {
                    title: 'Todo D',
                    project: 'Project D',
                    done: false,
                }
            ]
        }
    },
    components:{
        TodoList
    },
    methods:{
        deleteListF(index) {
            this.todos.splice(index,1)
        },
        // 编辑按钮 初始化model数据
        editorBtn(index) {
            this.isShow = true
            this.currentIndex = index
            this.form.title = this.todos[index].title
            this.form.project = this.todos[index].project
            this.form.done = this.todos[index].done
            this.picked = this.todos[index].done === true ? '0':'1'

        },
        // 修改数据后，回调事件
        closeSure() {
            this.isShow = false
            const copyData = Object.assign({},this.form)
            copyData.done = this.picked == '0' ? true : false
            this.todos.splice(this.currentIndex,1, copyData)
        }
    }
}
</script>

<style lang="css">
.v-modal-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9666;
}
.cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9667;
    background-color: #000;
    opacity: .2;
}
.form{
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 15px;
    text-align: center;
}
.input{
    height: 40px;
    margin: 15px 0;
    width: 300px;
    outline: none;
    padding-left: 4px;
}
.btn{
    cursor: pointer;
    width: 80px;
    height: 40px;
    background-color: rgb(53, 156, 125);
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    display: inline-block;
    margin-top: 15px;
}
</style>
