<template>
    <div class="Bigmodule1">
    <div class="div"></div>
      <ul class="kinds_ul">
        <li class="kinds_li" v-for="item in Bigmodule">
          <div class="icon" v-if="item.name"><img :src="item.icon" alt=""  class="img"></div>
          <div class="icon" v-else ><img :src="item.icon" alt="" class="current"></div>
          <div class="text" v-show="item.name">{{item.name}}</div>
        </li>
      </ul>
    <div class="div"></div>
    </div>
</template>
<script>
    export  default{
      props: {
        Bigmodule: {
          type: Array
        }
      },
        data(){
            return {}
        }
    }
</script>

<style lang='less' scoped>
.div{
  width: 100%;
  height: 5px;
  background:rgba(238,238,238,0.5);
}
.kinds_ul{
  padding: 10px;
  display: flex;
  width: 100%;
  margin: 0;
  .kinds_li{
    position: relative;
    flex: 1;
    float: left;
    text-align: center;
    .icon{
      width: 100%;
      height: 50px;
      .img{
        width: 50px;
        height: 50px;
      }
      .current{
        width: 80px;
        height: 50px;
      }
    }
    .text{
      font-size: 14px;
      width: 100%;
      height: 14px;
      padding:5px 5px 20px 5px;
      box-sizing: border-box;
    }
  }
}
</style>

