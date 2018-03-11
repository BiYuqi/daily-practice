<template lang="html">
  <div class="tag-wrap">
    <el-tag
      v-for="tag in tagList"
      :key="tag.name"
      @click.native="tagClick(tag.name)"
      closable
      :type="tag.type">
      {{tag.meta.title}}
    </el-tag>
  </div>
</template>

<script>
import { baseRoute } from '@/router/sidebar'
import filterName from '@/utils/includes'
import EventBus from '@/utils/eventBus'
export default {
  data () {
    return {

    }
  },
  methods: {
    tagClick (name) {
      // tagvisited 触发左侧边栏展开
      const flag = filterName(baseRoute, name)
      if (flag) {
        EventBus.$emit('openSidebar', flag)
      }
      this.$router.push({
        name: name
      })
    }
  },
  computed: {
    tagList () {
      return this.$store.state.pageOpenedList
    }
  }
}
</script>

<style lang="css">
</style>
