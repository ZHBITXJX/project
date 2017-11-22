<template>
    <div class="about">
      <div class="title">
        <span class="title_icon"></span>
        <span class="title_text">{{Smallmodule.title.text}}</span>
      </div>
      <div class="decription">
        {{Smallmodule.decription}}
      </div>
      <ul class="book_ul">
        <li class="book_li" v-for="book in Smallmodule.lists" >
          <div class="book_img">
            <img :src="book.coverPic" alt="">
          </div>
          <div class="book_name">{{book.title}}</div>
          <div class="book_author">{{book.authorPenname}}</div>
          <div class="book_price">
            <span class="salePrice">{{book.salePrice}}</span>
          </div>
        </li>
      </ul>
    </div>

</template>

<script>
    export  default{
      props: {
        Smallmodule: {
          type: Object
        }
      },
        data(){
            return {}
        }
    }
</script>

<style lang='less' scoped>
  .title{
    width: 100%;
    height: 30px;
    font-size: 18px;
    .title_icon{
      width: 20px;
      height: 20px;
    }
  }
  .decription{
    width: 100%;
    line-height: 1.75;
    font-size: 16px;
    color: grey;
  }
  .book_ul{
    /*float: left;*/
    width: 100%;
    padding:20px 15px 0px 15px;
    box-sizing: border-box;
    .book_li{
      left: 10px;
      position: relative;
      float: left;
      width: 33.33%;
      height: 200px;
      .book_img{
        position: absolute;
        width: 80px;
        img{
          width: 80px;
          height: 100px;
        }
      }
      .book_name{
        position: absolute;
        top:100px;
        width: 80px;
        font-size:12px;
        height: 34px;
        overflow: hidden;
      }
      .book_author{
        top:150px;
        position: absolute;
        width: 80px;
        font-size:12px;
        height: 18px;
        line-height: 18px;
        color: #ccc;
        overflow: hidden;
      }
      .book_price{
        top:168px;
        position: absolute;
        width: 80px;
        height: 12px;
        line-height: 12px;
        .salePrice{
          width: 80px;
          font-size:12px;
          color: red;
        }
      }
    }
  }
</style>

