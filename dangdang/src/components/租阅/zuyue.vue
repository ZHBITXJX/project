<template>
    <div class="zuyue">
      <div class="header_slider" >
        <ul class="ul_slider" ref="ul_slider">
          <li v-for="item in zuyueSlideImage.concat(zuyueSlideImage[0])" class="slider_li">
            <img :src=item alt="">
          </li>
        </ul>
        <div class="square">
          <ul class="square_ul"  ref="square_ul">
            <li class="square_li" v-for="(item,index) in zuyueSlideImage" @click="scrollToSelectImg(index)"
                :class="{'current':currentIndex === index}"></li>
          </ul>
        </div>
      </div>
      <div class="detail_img">
        <img src="http://img60.ddimg.cn/ebook/201709/924/shuoming750-4.png" alt="">
      </div>
      <div class="header_detail" >
        <img class="bulletin-img" src="http://img7x7.ddimg.cn/imghead/28/21/9208367734627-1_e.png">
        <span class="bulletin-text">开通租阅权，免费读好书</span>
        <button class="bulletin-right">立即开通</button>
      </div>
      <div class="Bigmodule1">
        <Bigmodule1 :Bigmodule='Bigmodule1'></Bigmodule1>
      </div>
      <div class="about">
        <Smallmodule1 :Smallmodule='Smallmodule1'></Smallmodule1>
      </div>
      <div class="Bigmodule2">
        <Bigmodule2 :Bigmodule='Bigmodule2'></Bigmodule2>
      </div>
      <div class="Smallmodule2">
        <Bookmodule :Smallmodule='Smallmodule2'></Bookmodule>
      </div>
      <div class="Bigmodule3">
        <Bigmodule2 :Bigmodule='Bigmodule3'></Bigmodule2>
      </div>
      <div class="Centermodule3">
        <Bigmodule2 :Bigmodule='Centermodule3'></Bigmodule2>
      </div>
      <div class="Smallmodule3">
        <Bookmodule :Smallmodule='Smallmodule3'></Bookmodule>
      </div>
      <div class="Bigmodule4">
        <Bigmodule2 :Bigmodule4='Bigmodule4'></Bigmodule2>
      </div>
      <div class="Smallmodule4">
        <Bookmodule :Smallmodule='Smallmodule4'></Bookmodule>
      </div>
      <div class="div"></div>
      <div class="Smallmodule5">
        <Bookmodule :Smallmodule='Smallmodule5'></Bookmodule>
      </div>
      <div class="Footmodule">
        <Footmodule :Footmodule ='Footmodule'></Footmodule>
      </div>
    </div>

</template>

<script>
  import {mapActions, mapMutations,mapGetters} from 'vuex'
  import Bigmodule1 from "../Goods/Bigmodule1.vue"
  import Bigmodule2 from "../Goods/Bigmodule2.vue"
  import Bookmodule from "../Goods/Bookmodule.vue"
  import Smallmodule1 from "./about.vue"
  import Footmodule from "./foot.vue"
    export  default{
      props: {
        zuyueSlideImage: {
          type: Array
        }
      },
      data(){
        return {
          content:[],
          Bigmodule1:[],
          Smallmodule1:{},
          Bigmodule2:[],
          Smallmodule2:[],
          Bigmodule3:[],
          Smallmodule3:[],
          Centermodule3:[],
          Bigmodule4:[],
          Smallmodule4:[],
          Smallmodule5:[],
          Footmodule:[]
        }
      },
      components:{
        Bigmodule1,
        Bigmodule2,
        Smallmodule1,
        Bookmodule,
        Footmodule
      },
      computed: {
        ...mapGetters(['currentIndex', 'valueChange']),
      },
      created:function () {
        let self = this
        this.$axios.get('/api/zuyueContent')
          .then((res) => {
            res = res.data
            if (res.error === 0) {
              self.content= res.data
              self.Bigmodule1=res.data[0].Bigmodule
              self.Smallmodule1=res.data[0].Smallmodule
              self.Bigmodule2=res.data[1].Bigmodule
              self.Smallmodule2=res.data[1].Smallmodule
              self.Bigmodule3=res.data[2].Bigmodule
              self.Centermodule3=res.data[2].Centermodule
              self.Smallmodule3=res.data[2].Smallmodule
              self.Bigmodule4=res.data[4].Bigmodule
              self.Smallmodule4=res.data[4].Smallmodule
              self.Smallmodule5=res.data[5].Smallmodule
              self.Footmodule=res.data[6].Bigmodule
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$nextTick(()=>{
        this.RECEIVE_LENGTH(2)
        let obj = this.$refs.ul_slider
        this.startHeaderTransition(obj)
        this.linstenTranstionEnd({obj, callback: this.callback})
      })
      },
      methods: {
        ...mapActions(['startHeaderTransition', 'linstenTranstionEnd', 'transitionAgain']),
        ...mapMutations(['RECEIVE_LENGTH', 'RECEIVE_STATE']),
        callback() {
          this.transitionAgain({obj: this.$refs.ul_slider, modules: 'goods'})
        },
        scrollToSelectImg(index) {
          this.RECEIVE_STATE(index)
        },
      },
      watch: {


      }
    }
</script>

<style lang='less' scoped>
.zuyue{
  position: fixed;
  top: 90px;
  bottom: 60px;
  width: 100%;
  font-size: 30px;
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
      width:300%;
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
      width: 30px;
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
  .detail_img{
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    height: 150px;
    z-index: 1;
    img{
      width: 100%;
      height: 150px;
    }
  }
  .header_detail {
    position:absolute;
    display: flex;
    top: 305px;
    left: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 0;
    z-index: 1;
    .bulletin-img {
      flex: 0 0 35px;
      display: inline-block;
      width: 35px;
      line-height: 35px;
      border-radius: 50%;
      margin-left: 5px;
    }
    .bulletin-text {
      flex: 1;
      display: inline-block;
      font-size: 15px;
      line-height: 35px;
      margin: 0 4px;
    }
    .bulletin-right{
      flex: 0 0 70px;
      display: inline-block;
      font-size: 14px;
      line-height: 35px;
      height: 35px;
      color: #ccc;
      background: sandybrown;
      border-radius: 20px;
      border: none;
      margin-right: 10px;
    }
  }
  .Bigmodule1{
    width: 100%;
    position: absolute;
    top:173px;
    left: 0;
  }
  .about{
    width: 100%;
    position: absolute;
    top:215px;
    left:0;
  }
  .Bigmodule2{
    width: 100%;
    position: absolute;
    top:400px;
    left: 0;
  }
  .Smallmodule2{
    width: 100%;
    position: absolute;
    top:930px;
    left: 0;
  }
  .Bigmodule3{
    width: 100%;
    position: absolute;
    top:1220px;
    left: 0;
  }
  .Centermodule3{
    width: 100%;
    position: absolute;
    top:1362px;
    left: 0;
  }
  .Smallmodule3{
    width: 100%;
    position: absolute;
    top:1925px;
    left: 0;
  }
  .Bigmodule4{
    width: 100%;
    position: absolute;
    top:2415px;
    left: 0;
  }
  .Smallmodule4{
    width: 100%;
    position: absolute;
    top:2920px;
    left: 0;
  }
  .div{
    width: 100%;
    position: absolute;
    top:3580px;
    height: 5px;
    background:rgba(238,238,238,0.5);
  }
  .Smallmodule5{
    width: 100%;
    position: absolute;
    top:3615px;
    left: 0;
  }
  .Footmodule{
    width: 100%;
    position: absolute;
    top:4270px;
    left: 0;
  }
}
</style>

