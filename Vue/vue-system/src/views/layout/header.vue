<template>
  <div class="header-wrap">
    <svg-ic class="header-icon"
            name="switch"
            :class="{collapse: collapse}"
            @click.native="changeTab">
    </svg-ic>
    <el-dropdown trigger="click" size="small" class="user-info" @command="handleCommand">
      <span class="el-dropdown-link">
        <svg-icon name="biyuqi" class="avatar"></svg-icon>
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
import SvgIc from '@/components/SvgIcon'
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
          Cookie.remove('role')
          localStorage.removeItem('pageOpenedList')
          this.$store.commit('clearAllTags')
          this.$store.commit('app/resetRole')
          this.$store.commit('permiss/RM_ROLE')
          setTimeout(() => {
            this.$router.push({
              name: 'login'
            })
          }, 0)
          break
        default:
      }
    }
  },
  computed: {
    collapse () {
      return this.$store.state.sidebarStatus
    }
  },
  components: {
    SvgIc
  }
}
</script>

<style lang="scss">
@import '../../styles/layout/header.scss';
</style>
