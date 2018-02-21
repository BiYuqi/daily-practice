<template>
  <div class="main-wrap">
    <header-on></header-on>
    <div class="main-con">
      <side-bar></side-bar>
      <div class="opend-list">
        <ul>
          <li v-for="item in getOpendPage" :key="item.id" @click="jump(item)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderOn from '@/views/layout/header'
import SideBar from '@/views/layout/sidebar'
export default {
  components: {
    HeaderOn,
    SideBar
  },
  computed: {
    getOpendPage () {
      return this.$store.state.pageOpenedList
    }
  },
  methods: {
    jump (item) {
      if (item.arg) {
        this.$router.push({
          name: item.name,
          params: item.arg
        })
      } else {
        this.$router.push({
          name: item.name,
          query: item.query
        })
      }
    }
  },
  created () {
    this.$store.commit('setOpenedList')
  }
}
</script>

<style lang="scss">
.opend-list{
  ul{
    overflow: hidden;
    list-style: none;
  }
  li{
    float: left;
    cursor: pointer;
    padding: 2px 8px;
    margin-right: 3px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: rgb(79, 140, 175);
    color: #fff;
  }
}
</style>
