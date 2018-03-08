<template>
  <div class="header-wrap">
    <button type="button" name="button" @click="changeTab">切换</button>
    我是header
    <button @click="goBack">后退</button>
    <el-dropdown trigger="click" size="small" class="user-info" @command="handleCommand">
      <span class="el-dropdown-link">
        <img src="../../assets/img/avatar.png" class="avatar" alt="">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    changeTab () {
      this.$store.commit('setSidebar')
    },
    handleCommand (item) {
      switch (item) {
        case 'loginout':
          Cookie.remove('user')
          localStorage.removeItem('pageOpenedList')
          this.$store.commit('clearAllTags')
          setTimeout(() => {
            this.$router.push({
              name: 'login'
            })
          }, 0)
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/layout/header.scss';
</style>
