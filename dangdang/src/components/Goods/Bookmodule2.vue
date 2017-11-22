<template>
    <div class="bookmodule2">
      <div v-for="item in Smallmodule2">
      <div class="div"></div>
      <div class="Bigname">{{item.name}}</div>
      <img :src="item.img" alt=""class="img" v-if="item.img">
        <div class="imgArray" v-if="item.imgArray">
          <ul class="imgArray_ul">
            <li class="imgArray_li" v-for="items in item.imgArray">
              <div class="icon"><img :src="items" alt="" class="img"></div>
            </li>
          </ul>
        </div>
      <div class="kinds" v-if="item.kinds">
        <div class="left">
          <img class="left_img" :src="item.kinds.left.img" alt="">
          <div class="right_text">
            <span class="name">{{item.kinds.left.text}}</span>
            <span class="des">{{item.kinds.left.message}}</span>
          </div>
        </div>
        <div class="right">
          <img class="left_img" :src="item.kinds.right.img" alt="">
          <div class="right_text">
            <span class="name">{{item.kinds.right.text}}</span>
            <span class="des">{{item.kinds.right.message}}</span>
          </div>
        </div>
      </div>
      <div class="div"></div>
        <Bookmodule :Smallmodule="item.list"></Bookmodule>
    </div>
</div>
</template>

<script>
  import Bookmodule from "./Bookmodule.vue"
    export  default{
      props: {
        Smallmodule2: {
          type: Array
        }
      },
        data(){
            return {}
        },
      components:{
        Bookmodule
      }
    }
</script>

<style lang='less' scoped>
  .div{
    width: 100%;
    height: 5px;
    background: rgba(238,238,238,0.5);
    float: left;
    margin-bottom: 10px;
  }
  .Bigname{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    padding: 0 5px;
    float: left;
  }
  .img{
    width: 100%;
    height: 100px;
  }
  .imgArray{
    width: 100%;
    height: 200px;
    .imgArray_ul {
      width: 100%;
      padding: 10px;
      .imgArray_li {
        float: left;
        width: 50%;
        height: 100px;
        margin-bottom: 10px;
        .icon {
          margin: 0 auto;
          width: 160px;
          height: 100px;
          .img {
            width: 160px;
            height: 100px;
          }
        }
      }
    }
  }
  .kinds{
    width: 100%;
    height: 140px;
    display: flex;
    padding: 5px;
    .left{
      border-right: 1px solid #ccc;
    }
    .left,.right{
      flex: 1;
      display: flex;
      padding: 15px;
      .left_img{
        height: 100px;
        width: 70px;
      }
      .right_text{
        flex: 1;
        height: 100px;
        font-size: 14px;
        .name{
          margin-top: 30px;
          display: block;
          text-align: center;
        }
        .des{
          display: block;
          color: red;
          text-align: center;
        }
      }
    }
  }
</style>

