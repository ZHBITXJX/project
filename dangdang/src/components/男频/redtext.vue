<template>
    <div class="redText">
    <div class="div"></div>
      <div class="content">
        <div class="left">
          <span class="title">{{RedTextmodule.left.Bigtitle}}</span>
          <span class="dec">{{RedTextmodule.left.dec}}</span>
          <img :src="RedTextmodule.left.img" alt="">
        </div>
        <div class="right">
          <ul>
            <li v-for="item in RedTextmodule.right">
              <div class="li_left">
                <span class="title">{{item.left.name}}</span>
                <span class="dec">{{item.left.dec}}</span>
              </div>
              <div class="li_right">
                <img :src="item.right.img" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="div"></div>
    </div>

</template>

<script>
    export  default{
      props: {
        RedTextmodule: {
          type:Object
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
  .content{
    width: 100%;
    height: 200px;
    display: flex;
    .left{
      padding-left: 10px;
      flex: 0 0 40%;
      height: 200px;
      border-right: 1px solid rgba(238,238,238,0.5);
      .title{
        width: 100%;
        height: 40px;
        padding-top: 15px;
        font-size: 16px;
        display: block;
      }
      .dec{
        width: 100%;
        height: 20px;
        line-height:20px;
        font-size: 12px;
        color: #ccc;
        display: block;
      }
      img{
        margin-top: 15px;
        height: 110px;
        width: 100px;
      }
    }
    .right{
      flex: 1;
      height: 200px;
      li{
        height: 100px;
        border-bottom: 1px solid rgba(238,238,238,0.5);
        display: flex;
        .li_left,.li_right{
          display: inline-block;
          flex:1;
        }
        .li_left{
          padding-left: 10px;
          .title{
            height: 40px;
            padding-top: 15px;
            font-size: 16px;
            display: block;
          }
          .dec{
            height: 20px;
            line-height:20px;
            color: #ccc;
            font-size: 12px;
            display: block;
          }
        }
        .li_right{
          img{
            padding-top: 15px;
            height: 80px;
            width: 80px;
          }
        }
      }
    }
  }
</style>

