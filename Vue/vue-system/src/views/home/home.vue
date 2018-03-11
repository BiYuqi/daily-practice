<template>
  <div class="home-wrap">
    <button type="button" name="button" @click="jump">水电费</button>
    <el-row :gutter="10" class="hone-main">
      <el-col class="grid-content" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="head">
          <!-- <h4>五日报警动态</h4> -->
          <day-call height="300px"></day-call>
        </div>
      </el-col>
      <el-col class="grid-content" :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DayCall from './components/daysCall'
export default {
  methods: {
    jump () {
      this.$router.push({
        name: 'dashboard_index'
      })
    }
  },
  components: {
    DayCall
  }
}
</script>

<style lang="scss">
  .home-wrap{
    height: 100%;
    background-color: #172743;
    color: #fff;
    .hone-main{
      height: 100%;
    }
    .grid-content{
      // height: 100%;
    }
  }
</style>
