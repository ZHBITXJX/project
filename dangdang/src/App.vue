<template>
  <div id="app">
    <router-view :header="header" :slideImage="slideImage" :detail="detail"
                 :zuyueSlideImage="zuyueSlideImage" :tingshuSlideImage="tingshuSlideImage"
                 :nanpinSlideImage="nanpinSlideImage" :nupinSlideImage="nupinSlideImage"
                 :dongmanSlideImage="dongmanSlideImage"></router-view>
    <div class="tab border">
      <div class="tab-item">
        <router-link to="/导读"><i class='iconfont icon-bookmark'></i><br/>导读</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/书城"> <i class='iconfont icon-book' ></i><br/>书城</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/书架"> <i class='iconfont icon-bookshelf-' ></i><br/>书架</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/社区">  <i class='iconfont icon-chatbtn' ></i><br/>社区</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/我的"> <i class='iconfont icon-account' ></i><br/>我的</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/header.vue"
export default {
  name: 'app',
  data () {
    return {
      header: [],
      slideImage: [],
      detail:{},
      content:[],
      zuyueSlideImage:[],
      tingshuSlideImage:[],
      nanpinSlideImage:[],
      nupinSlideImage:[],
      dongmanSlideImage:[]

    }
  },
  components: {
      Header
  },
  created() {
    let self = this
    this.$axios.get('/api/header')
      .then((res) => {
        res = res.data
        if (res.error === 0) {
          self.header = res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
    this.$axios.get('/api/slideImage')
      .then((res) => {
        res = res.data
        if (res.error === 0) {
          self.slideImage = res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
    this.$axios.get('/api/zuyueSlideImage')
      .then((res) => {
        res = res.data
        if (res.error === 0) {
          self.zuyueSlideImage = res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
    this.$axios.get('/api/detail')
      .then((res) => {
        res = res.data
        if (res.error === 0) {
          self.detail= res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
    this.$axios.get('/api/tingshuSlideImage')
      .then((res) => {
        res = res.data
        if (res.error === 0) {
          self.tingshuSlideImage = res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
    this.$axios.get('/api/nanpinSlideImage')
      .then((res) => {
        res = res.data
        if (res.error === 0) {
          self.nanpinSlideImage = res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
      this.$axios.get('/api/nupinSlideImage')
        .then((res) => {
        res = res.data
      if (res.error === 0) {
        self.nupinSlideImage = res.data
      }
      })
      .catch((error) => {
        alert(error)
      })
      this.$axios.get('/api/dongmanSlideImage')
        .then((res) => {
        res = res.data
      if (res.error === 0) {
        self.dongmanSlideImage = res.data
      }
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>

<style lang='less' scoped>
#app {
  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    height: 60px;
    width: 100%;
    z-index: 20;
    border-top: 1px solid #ccc;
    background: rgba(238,238,238,0.5);
    .tab-item {
      flex: 1;
      text-align: center;
      i{
        font-size: 24px;
        color: #ccc;
      }
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: aqua;
          text-decoration: none;
          i:first-of-type{
            color: aqua;
          }
        }
      }
    }
  }
}
</style>
