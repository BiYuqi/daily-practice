<template>
    <div class="container" id="get-todo">
        <input type="text" :value="newTodo" v-model="message" class="form-control"  @change="getTodo" placeholder="I need to ...">
        <button type="button" id="ac-todo" name="button" class="btn btn-primary" @click="addTodo">Todo</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message:''
        }
    },
    methods: {
        getTodo(e) {
            this.$store.dispatch('getTodo',e.target.value)
        },
        addTodo() {
            if( !this.message ){ return }
            this.$store.dispatch('addTodo')
            this.$store.dispatch('clearTodo')
            this.message = ''
        }
    },
    computed: {
        newTodo() {
            return this.$store.getters.newTodo
        }
    }
}
</script>

<style lang="css">
#ac-todo{
    margin-top: 30px;
}
</style>
