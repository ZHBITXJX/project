<template>
    <div class="like">
      <div v-for="bitem in likemodule">
        <div class="div"></div>
    <div class="title">{{bitem.title}}</div>
    <div class="img" v-if="bitem.img"><img :src="bitem.img" alt=""/></div>
      <ul>
        <li v-for="item in  bitem.content">
          <div class="content">
            <div class="left">
              <img :src="item.left.img" alt="">
            </div>
            <div class="right">
              <div class="name">{{item.right.name}}</div>
              <div class="dec">{{item.right.dec}}</div>
              <div class="inc">{{item.right.ico}}</div>
              <div class="price" v-if="item.priceUnit==5">5铃铛/千字</div>
              <div class="price">49铃铛/话</div>
            </div>
          </div>
        </li>
      </ul>
        <div class="link" v-if="bitem.link">{{bitem.link}}</div>
      </div>
    </div>

</template>

<script>
    export  default{
      props: {
        likemodule: {
          type:Array
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
.title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
}
.img{
  width: 100%;
  height: 100px;
  margin-bottom:30px;
  img{
    width: 100%;
    height: 100px;
  }
}
.content{
  width: 100%;
  height: 120px;
  display: flex;
  margin-top: 10px;
  .left {
    flex: 0 0 25%;
    height: 120px;
    img {
      width: 100%;
      height: 120px;
    }
  }
  .right{
      flex: 1;
      height: 120px;
      margin-left: 10px;
      .name{
        line-height: 30px;
        height: 30px;
        font-size: 16px;
      }
      .dec{
        line-height: 25px;
        height: 25px;
        font-size: 14px;
      }
      .inc{
        height: 38px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #ccc;
      }
      .price{
        line-height: 30px;
        height: 30px;
        font-size: 14px;
        color: red;
      }
    }
  }
  .link{
    /*float: left;*/
    border-top: 1px solid rgba(238,238,238,0.5);;
    height: 30px;
    line-height: 30px;
    width: 100%;
    text-align: center;
    font-size: 12px;
  }

</style>

