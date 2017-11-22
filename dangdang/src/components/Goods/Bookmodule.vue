<template>
    <div class="bookList">
      <div class="list" v-for="(item,index) in Smallmodule">
      <p class="title" v-if="item.name">{{item.name}}</p>
      <ul class="book_ul">
        <li class="book_li" v-for="book in item.lists" >
          <div class="book_img">
            <img :src="book.coverPic" alt="">
          </div>
          <div class="book_name">{{book.title}}</div>
          <div class="book_author">{{book.authorPenname}}</div>
          <div class="book_price">
            <span class="salePrice" v-if="book.salePrice">{{book.salePrice}}</span>
            <span class="salePrice" v-if="book.priceUnit==49">{{book.priceUnit}}铃铛/话</span>
            <span class="salePrice" v-if="!book.salePrice&&book.priceUnit!=5&&book.priceUnit!=49">{{book.price}}铃铛/本</span>
            <span class="salePrice" v-if="book.price==1">免费</span>
            <span class="salePrice" v-if="book.price==0&&book.priceUnit==5">{{book.priceUnit}}铃铛/千字</span>
          </div>
        </li>
      </ul>
      <div class="link" v-if="item.link">{{item.link}}</div>
        <div class="div"></div>
      </div>
    </div>

</template>

<script>
    export  default{
      props: {
        Smallmodule: {
          type: Array
        }
      },
        data(){
            return {}
        }
    }
</script>

<style lang='less' scoped>
.bookList{
  width: 100%;
  .list{
    width: 100%;
    .title{
      float: left;
      width: 100%;
      padding-top:10px;
      height: 20px;
      line-height: 20px;
      font-size: 18px;
    }
    .book_ul{
      float: left;
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
    .link{
      float: left;
      border-top: 1px solid rgba(238,238,238,0.5);;
      height: 30px;
      line-height: 30px;
      width: 100%;
      text-align: center;
      font-size: 12px;
    }
    .div{
      float: left;
      width: 100%;
      height: 5px;
      background:rgba(238,238,238,0.5);
    }
  }
}
</style>

