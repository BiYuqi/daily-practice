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
export default {
  data () {
    return {

    }
  },
  methods: {
    tagClick (name) {
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
