<template>
    <div class='header'>
      <div class="header_box">
      <form action="" class="header_from">
        <i class="glyphicon glyphicon-search"></i>
        <input class="search" type="search" placeholder="搜索书名/作者">
      </form>
        <i class='glyphicon glyphicon-shopping-cart'></i>
      </div>
      <div class="header_nav">
        <ul class="header_ul">
          <li class="header_li" v-for="(item,index) in header"  @click="show($event,index)" :class="{'current':showIndex === index}">
           {{item}}
          </li>
        </ul>
      </div>
      <Goods :slideImage=slideImage :detail=detail v-if="ymindex===0" ></Goods>
      <Zuyue  :zuyueSlideImage=zuyueSlideImage v-if="ymindex===1"></Zuyue>
      <Tingshu :tingshuSlideImage=tingshuSlideImage v-if="ymindex===2"></Tingshu>
      <nanpin :nanpinSlideImage=nanpinSlideImage  v-if="ymindex===3"></nanpin>
      <nupin :nupinSlideImage=nupinSlideImage v-if="ymindex===4"></nupin>
      <manhua :dongmanSlideImage=dongmanSlideImage v-if="ymindex===5"></manhua>
      <zhishu  v-if="ymindex===6"></zhishu>
    </div>

</template>

<script>
  import Goods from "../Goods/goods.vue"
  import Zuyue  from "../租阅/zuyue.vue"
  import Tingshu from "../听书/tingshu.vue"
  import nanpin  from "../男频/nanpin.vue"
  import nupin  from "../女频/nupin.vue"
  import manhua  from "../漫画/manhua.vue"
  import zhishu  from "../纸书/zhishu.vue"
  import {mapGetters} from 'vuex'
    export  default{
      props: {
        header: {
          type: Array
        },
        slideImage: {
          type: Array
        },
        zuyueSlideImage: {
          type: Array
        },
        tingshuSlideImage: {
          type: Array
        },
        nanpinSlideImage: {
          type: Array
        },
        nupinSlideImage: {
          type: Array
        },
        dongmanSlideImage: {
          type: Array
        },
        detail: {
          type: Object
        }
      },
      data(){
        return {
          showIndex:0,
          ymindex:0
        }
      },
      components:{
          Goods,
          Zuyue,
          Tingshu,
          nanpin,
          nupin,
          manhua,
          zhishu
      },
      methods:{
        show (event,index) {
          this.showIndex=index
          this.ymindex=index
        }
      },
      computed:{
        ...mapGetters(['valueChange']),
      },
    }
</script>

<style lang='less' scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 0;
  z-index: 1;
  .header_box {
    position: relative;
    display: flex;
    width: 100%;
    height: 40px;
    .header_from {
      flex: 99%;
      position: relative;
      padding: 2px 10px;
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      .search {
        top: 5px;
        padding: 0 10px 0 53px;
        width: 99%;
        height: 29px;
        border: 1px solid rgba(238,238,238,0.5);
        border-radius: 20px;
        font-size: 12px;
        z-index: 3;
        text-align: center;
      }
      .glyphicon-search {
        position: fixed;
        font-size: 14px;
        z-index: 4;
        color:rgba(238,238,238,0.5);
        left: 33%;
        height: 29px;
        line-height: 29px;
      }
    }
    .glyphicon-shopping-cart{
      flex:1;
      padding: 2px 10px;
      height: 29px;
      line-height: 29px;
      box-sizing: border-box;
      font-size: 20px;
      color: rgba(0,0,0,0.3);
      text-align: center;
      right: 2%;
    }
  }
  .header_nav {
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    height: 50px;
    font-size: 0;
    z-index: 1;
    .header_ul {
      display: flex;
      padding: 10px 10px;
      height: 50px;
      .header_li {
        flex: 1;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        &.current{
          color: aqua;
          border-bottom: 1px solid aqua;
        }
      }
    }
  }
}
</style>

