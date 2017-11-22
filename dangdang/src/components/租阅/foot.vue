<template>
    <div class="foot">
     <ul class="foot_ul">
       <li class="foot_li" v-for="item in Footmodule">
         <div class="div"></div>
         <div class="content">
           <a href="">
         <img :src="item.icon" alt=""></a>
         <!--<span class="text">{{item.text}}</span>-->
         <!--<a href="">点击查看>></a>-->
         </div>
       </li>
     </ul>
    </div>

</template>

<script>
    export  default{
      props: {
        Footmodule: {
          type: Object
        }
      },
        data(){
            return {}
        }
    }
</script>

<style lang='less' scoped>
  .foot_ul{
    width: 100%;
    .foot_li{
      width: 100%;
      height: 105px;
      .div{
        width: 100%;
        height: 5px;
        background:rgba(238,238,238,0.5);
      }
      .content{
        width: 100%;
        height: 80px;
        margin-top: 20px;
        /*display: flex;*/
        img{
          /*flex:0 0 80px;*/
          width: 100%;
          height: 80px;
        }
        /*.text{*/
          /*flex: 1;*/
          /*height: 80px;*/
          /*line-height: 80px;*/
        /*}*/
        /*a{*/
          /*color: black;*/
          /*flex:0 0 80px;*/
          /*height: 80px;*/
          /*line-height: 80px;*/
        /*}*/
      }
    }
  }
</style>

