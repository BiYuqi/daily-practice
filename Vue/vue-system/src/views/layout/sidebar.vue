<template>
  <div class="sidebar-wrap" :class="{hideSidebar: isCollapse}">
    <el-menu
      default-active="$route.path"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :collapse="isCollapse">
      <template v-for="item in routes">
        <template v-if="item.children && item.children.length > 1">
          <el-submenu :index="item.name" :key="item.name">
            <template slot="title">
              <svg-icon :name="item.icon"></svg-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item :index="items.name||items.path" v-for="items in item.children" :key="items.path">
              <span>{{ items.meta.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else-if="item.children && item.children.length === 1">
          <el-menu-item :index="items.name||items.path" v-for="items in item.children" :key="items.path">
            <svg-icon :name="item.icon"></svg-icon>
            <span>{{ items.meta.title }}</span>
          </el-menu-item>
        </template>
        <template v-else>
            <el-menu-item :index="item.name||item.path" :key="item.path">
                <svg-icon :name="item.icon"></svg-icon>
                <span slot="title">{{ item.title }}</span>
            </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { baseRoute } from '@/router/sidebar'
export default {
  data () {
    return {
      routes: baseRoute
    }
  },
  computed: {
    getOpendPage () {
      return this.$store.state.pageOpenedList
    },
    isCollapse () {
      return !!this.$store.state.sidebarStatus
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key)
    },
    handleClose (key, keyPath) {},
    handleSelect (key, keyPath) {
      console.log(key)
      this.$router.push({
        name: key
      })
    }
  },
  mounted () {
    console.log(this.routes)
  }
}
</script>

<style lang="scss">
@import '../../styles/layout/sidebar.scss';
.svg-icon{
  width: 36px;
  height: 36px;
}
</style>
