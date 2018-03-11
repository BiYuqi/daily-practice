<template lang="html">
  <div class="setting-wrap">
    <el-switch
      v-model="showTabs"
      @change="switchStatus"
      active-color="#42b983"
      active-text="显示顶部历史tab"
      inactive-text="关闭顶部历史tab">
    </el-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTabs: true
    }
  },
  methods: {
    switchStatus () {
      this.$store.commit('setHeadVisetedShow')
    }
  }
}
</script>

<style lang="scss">
.setting-wrap{
  padding: 15px 25px;
}
</style>
