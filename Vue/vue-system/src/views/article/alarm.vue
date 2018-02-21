<template lang="html">
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" @click="jump(item.id)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '外卖1',
          id: '1234'
        },
        {
          title: '外卖3',
          id: '5678'
        }
      ]
    }
  },
  methods: {
    jump (id) {
      this.$router.push({
        name: 'foo_index',
        params: {
          user_id: id
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
