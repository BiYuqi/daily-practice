<template>
    <div class="container" id="current-todos">
        <h3 v-if="todos.length > 0">Current({{ todos.length }})</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">
                {{ todo.body }}
                <div class="btn-group">
                    <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-edit"></span>Edit
                    </button>
                    <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-ok activeBorder" v-if="todo.completed === true"></span>
                        <span class="glyphicon glyphicon-ok-circle" v-else></span>Complete
                    </button>
                    <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-remove-circle"></span>Remove
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        edit(todo) {
            this.$store.dispatch('editTodo', todo)
        },
        complete(todo) {
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo) {
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos() {
            return this.$store.getters.todos
        }
    }
}
</script>

<style lang="css">
.list-group-item{
    position: relative;
}
.btn-group{
    position: absolute;
    top: 4px;
    right: 4px;
}
.activeBorder{
    color: rgb(71, 140, 124);
}
</style>
