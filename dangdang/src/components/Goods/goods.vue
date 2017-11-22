<template>
  <div class="goodWrapper" ref="goodWrapper">
    <div class="goods" >
      <div class="header_slider" >
        <ul class="ul_slider" ref="ul_slider" >
          <li v-for="(item,index) in slideImage.concat(slideImage[0])" class="slider_li"  >
            <img :src=item alt="">
          </li>
        </ul>
        <div class="square">
          <ul class="square_ul"  ref="square_ul">
            <li class="square_li" v-for="(item,index) in slideImage" @click="scrollToSelectImg(index)"
                :class="{'current':currentIndex === index}" ></li>
          </ul>
        </div>
      </div>
      <div class="header_detail" >
        <img class="bulletin-title" :src="detail.icon">
        <span class="bulletin-text">{{detail.text}}</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
      <div class="Bigmodule1">
      <Bigmodule1 :Bigmodule='Bigmodule1'></Bigmodule1>
      </div>
      <div class="Smallmodule1">
        <Bookmodule :Smallmodule='Smallmodule1'></Bookmodule>
      </div>
      <div class="Bigmodule2">
        <Bigmodule2 :Bigmodule='Bigmodule2'></Bigmodule2>
      </div>
      <div class="Smallmodule2">
        <Bookmodule :Smallmodule='Smallmodule2'></Bookmodule>
      </div>
      <div class="Bigmodule3">
        <Bigmodule1 :Bigmodule='Bigmodule3'></Bigmodule1>
      </div>
      <div class="Smallmodule3">
        <div class="title">
          <div class="title_box">
          <img src="http://e.dangdang.com/media/h5/ddreader50/CMSModule/img/icon_cup@2x.png" alt="" class="title_img">
          电子书榜单
          </div>
          <ul class="ul">
            <li ref="book_item" class="book_item" v-for="(item,index) in topArray" @click="show($event,index)" :class="{'index':showIndex === index}">{{item}}</li>
          </ul>
        </div>

        <div class="select">
        <Bookmodule :Smallmodule='Smallmodule3'></Bookmodule>
        </div>
      </div>
      <div class="Bigmodule4">
        <Bigmodule2 :Bigmodule='Bigmodule4'></Bigmodule2>
      </div>
      <div class="Smallmodule4">
        <Bookmodule2 :Smallmodule2='Smallmodule4'></Bookmodule2>
        <div class="img">
          <img src="http://img61.ddimg.cn/picc/shudan080929.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations,mapGetters} from 'vuex'
  import IScroll  from 'iscroll'
  import Bigmodule1 from "./Bigmodule1.vue"
  import Bookmodule from "./Bookmodule.vue"
  import Bigmodule2 from "./Bigmodule2.vue"
  import Bookmodule2 from "./Bookmodule2.vue"
  export  default{
    props: {
      slideImage: {
        type: Array
      },
      detail: {
        type: Object
      },
      content: {
        type: Array
      }
    },
    data(){
      return {
          content:[],
          Bigmodule1:[],
          Smallmodule1:[],
          Bigmodule2:[],
          Smallmodule2:[],
          Bigmodule3:[],
          Bigmodule4:[],
          Smallmodule3:[],
          Smallmoduleall:[],
          Smallmodule4:[],
          topArray:["畅销榜","新书榜","阅读榜","热销榜"],
          showIndex:0,

      }
    },
    components:{
      Bigmodule1,
      Bookmodule,
      Bigmodule2,
      Bookmodule2

    },
    computed:{
      ...mapGetters(['currentIndex','valueChange']),
    },
    created() {
      let self = this
      this.$axios.get('/api/content')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.content= res.data
            self.Bigmodule1=res.data[0].Bigmodule
            self.Smallmodule1=res.data[0].Smallmodule
            self.Bigmodule2=res.data[1].Bigmodule
            self.Smallmodule2=res.data[1].Smallmodule
            self.Bigmodule3=res.data[2].Bigmodule
            self.Smallmodule3=res.data[2].Smallmodule[0]
            self.Smallmoduleall=res.data[2].Smallmodule
            self.Bigmodule4=res.data[3].Bigmodule
            self.Smallmodule4=res.data[3].Smallmodule
          }
        })
        .catch((error) => {
          alert(error)
        })
        this.$nextTick(()=>{
        this.RECEIVE_LENGTH(8)
        let obj = this.$refs.ul_slider
        this.startHeaderTransition(obj)
        this.linstenTranstionEnd({obj, callback: this.callback})
      })
    },
    methods: {
      ...mapActions(['startHeaderTransition', 'linstenTranstionEnd', 'transitionAgain']),
      ...mapMutations(['RECEIVE_LENGTH','RECEIVE_STATE']),
      callback() {
        this.transitionAgain({obj: this.$refs.ul_slider, modules: 'goods'})
      },
      scrollToSelectImg(index) {
        this.RECEIVE_STATE(index)
      },
      show (event,index) {
        this.Smallmodule3=this.Smallmoduleall[index]
        this.showIndex=index
      }
    },
    watch: {

    }
  }
</script>

<style lang='less' scoped>
.goodWrapper{
  .goods{
  position: fixed;
  top: 90px;
  bottom: 60px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  .header_slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    font-size: 0;
    z-index: 1;
    .ul_slider {
      display: flex;
      width: 900%;
      height: 150px;
      overflow: hidden;
      .slider_li {
        position: relative;
        flex: 1;
        height: 150px;
        float: left;
        img {
          position: absolute;
          width: 100%;
          height: 150px;
        }
      }
    }
    .square {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 100px;
      height: 10px;
      .square_ul {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        .square_li {
          flex: 1;
          border: 1px solid #ccc;
          margin-right: 3px;
          border-radius: 50%;
          float: left;
          &.current {
            background: red;
          }
        }
      }
    }
  }
  .header_detail {
    position:absolute;
    display: flex;
    top: 150px;
    left: 0;
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 0;
    z-index: 1;
    .bulletin-title {
      flex: 0 0 20px;
      display: inline-block;
      vertical-align: top;
      margin-top: 8px;
      width: 20px;
      height:15px;
    }
    .bulletin-text {
      flex: 1;
      display: inline-block;
      font-size: 12px;
      line-height: 24px;
      height: 24px;
      margin: 0 4px;
      padding-top: 1px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .glyphicon-menu-right{
      flex: 0 0 3px;
      display: inline-block;
      font-size: 12px;
      padding-top: 1px;
      line-height: 24px;
      height: 24px;
      color: #ccc;
    }
  }
  .Bigmodule1{
    width: 100%;
    position: absolute;
    top:90px;
  }
  .Smallmodule1{
    width: 100%;
    position: absolute;
    top:290px;
  }
  .Bigmodule2{
    width: 100%;
    position: absolute;
    top:390px;
  }
  .Smallmodule2{
    width: 100%;
    position: absolute;
    top:1035px;
  }
  .Bigmodule3{
    width: 100%;
    position: absolute;
    top:1435px;
  }
  .Smallmodule3{
    width: 100%;
    position: absolute;
    top:1595px;
    .title{
      width: 100%;
      height: 100px;
      background-image:url("http://e.dangdang.com/media/h5/ddreader50/CMSModule/img/bg_title.png");
      background-repeat: no-repeat;
      position: relative;
      border-bottom: 2px solid rgba(255,239,191,0.5);
      .title_box{
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 20px;
        .title_img{
          width: 50px;
          height: 50px;
          padding: 10px;
        }
      }
      .ul{
        display: flex;
        height: 20px;
        position: absolute;
        width: 100%;
        bottom: 0;
        .book_item{
          flex: 1;
          float: left;
          font-size: 16px;
          text-align: center;
          &.index{
            color: orange;
          }
        }

      }
    }

    .select{
      width: 100%;
      position: absolute;
      top:90px;
    }
  }
  .Bigmodule4{
    width: 100%;
    position: absolute;
    top:1955px;
  }
  .Smallmodule4{
    width: 100%;
    position: absolute;
    top:2560px;
    .img{
      width: 100%;
      position: absolute;
      bottom:-100px;
      float: left;
      img{
        width: 100%;
        height: 100px;
      }
    }
  }

}

}
</style>

