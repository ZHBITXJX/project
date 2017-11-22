<template>
  <div class="Bigmodule2">
    <div class="div"></div>
    <ul class="kinds2_ul">
      <li class="kinds2_li" v-for="item in Bigmodule" v-if="Bigmodule.length===2">
        <div class="icon"><img :src="item.icon" alt="" class="img"></div>
      </li>
      <li class="kinds2_li" v-for="item in Bigmodule" v-if="Bigmodule.length===4">
        <div class="icon"><img :src="item.icon" alt="" class="img"></div>
      </li>
      <li class="kinds4_li" v-for="item in Bigmodule4" v-if="Bigmodule4.length===4">
        <div class="icon"><img :src="item.icon" alt="" class="img"></div>
      </li>
      <li class="kinds4_li" v-for="item in Bigmodule" v-if="Bigmodule.length===8">
        <div class="icon"><img :src="item.icon" alt="" class="img"></div>
      </li>
      <li class="kinds4_li" v-for="item in Bigmodule" v-if="Bigmodule.length===12">
        <div class="icon"><img :src="item.icon" alt="" class="img"></div>
      </li>
    </ul>
    <div class="div bottom"></div>
    </div>
</template>
<script>
  export  default{
    props: {
      Bigmodule: {
        type: Array
      },
      Bigmodule4: {
        type: Array
      }
    },
    data(){
      return {}
    }
  }
</script>

<style lang='less' scoped>
  .div {
    width: 100%;
    height: 5px;
    background: rgba(238,238,238,0.5);
    float: left;
    margin: 0px 0px 20px 0px;
    /*box-sizing: border-box;*/
  }
  .bottom{
    margin: 10px 0px 0px 0px;
  }
  .kinds2_ul{
    width: 100%;
    padding: 10px;
    .kinds2_li{
       float: left;
       width: 50%;
       height: 100px;
       margin-bottom:10px;
       .icon{
         margin: 0 auto;
         width: 160px;
         height: 100px;
         .img{
           width: 160px;
           height: 100px;
         }
       }
     }
    .kinds4_li{
      float: left;
      width: 25%;
      height: 50px;
      margin-bottom:10px;
      .icon{
        margin: 0 auto;
        width: 50px;
        height: 50px;
        .img{
          width: 50px;
          height: 50px;
        }
      }
    }
  }

</style>

