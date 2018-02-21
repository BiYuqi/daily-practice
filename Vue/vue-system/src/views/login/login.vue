<template>
  <div class="login-wrap">
    <input type="text" v-model="user">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  data () {
    return {
      user: ''
    }
  },
  methods: {
    login () {
      if (!this.user) {
        return
      }
      Cookie.set('user', this.user)
      this.$router.push({
        name: 'alarm_index'
      })
    }
  }
}
</script>
<style lang="scss">
  .login-wrap{
    background: #c33;
    padding: 5px 10px;
  }
</style>
