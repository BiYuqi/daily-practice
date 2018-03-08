<template>
  <div class="sidebar-wrap" :class="{hideSidebar: isCollapse}">
    <el-menu
      default-active="$route.path"
      @open="handleOpen"
      @close="handleClose"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :collapse="!!isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>急急急</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    getOpendPage () {
      return this.$store.state.pageOpenedList
    },
    isCollapse () {
      return this.$store.state.sidebarStatus
    }
  },
  methods: {
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {}
  }
}
</script>

<style lang="scss">
@import '../../styles/layout/sidebar.scss';
.tac{
  width: 100%;
}
</style>
