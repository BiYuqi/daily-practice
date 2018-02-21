<template>
  <div>
    我是foo, 我的参数是{{userInfo}}
    <button @click="jump">点击我跳转bar</button><br/>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    jump () {
      this.$router.push({
        name: 'bar_index'
      })
    }
  },
  computed: {
    userInfo () {
      return this.$route.params.userId
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(this.$route.params.user_id)
    }
  },
  mounted () {
  }
}
</script>

<style lang="css">
</style>
