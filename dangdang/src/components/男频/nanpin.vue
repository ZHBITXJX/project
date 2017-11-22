<template>
    <div class="nanpin">
      <div class="header_slider" >
        <ul class="ul_slider" ref="ul_slider">
          <li v-for="item in nanpinSlideImage.concat(nanpinSlideImage[0])" class="slider_li">
            <img :src=item alt="">
          </li>
        </ul>
        <div class="square">
          <ul class="square_ul"  ref="square_ul">
            <li class="square_li" v-for="(item,index) in nanpinSlideImage" @click="scrollToSelectImg(index)"
                :class="{'current':currentIndex === index}"></li>
          </ul>
        </div>
      </div>
      <div class="Bigmodule1">
        <Bigmodule1 :Bigmodule='Bigmodule1'></Bigmodule1>
      </div>
      <div class="Smallmodule1">
        <Bookmodule :Smallmodule='Smallmodule1'></Bookmodule>
      </div>
      <div class="RedTextmodule">
        <RedTextmodule :RedTextmodule='RedTextmodule'></RedTextmodule>
      </div>
      <div class="Smallmodule2">
        <Bookmodule :Smallmodule='Smallmodule2'></Bookmodule>
      </div>
      <div class="Bigmodule3">
        <Bigmodule2 :Bigmodule4='Bigmodule3'></Bigmodule2>
      </div>
      <div class="Smallmodule3">
        <Bookmodule :Smallmodule='Smallmodule3'></Bookmodule>
      </div>
      <img src="http://img63.ddimg.cn/www/a/7/4panlong.jpg" alt="">
      <div class="likemodule">
        <Likemodule :likemodule='likemodule'></Likemodule>
      </div>
    </div>

</template>

<script>
      import {mapActions, mapMutations,mapGetters} from 'vuex'
      import Bigmodule1 from "../Goods/Bigmodule1.vue"
      import Bigmodule2 from "../Goods/Bigmodule2.vue"
      import Bookmodule from "../Goods/Bookmodule.vue"
      import RedTextmodule from "./redtext.vue"
      import Likemodule from "./like.vue"
      export  default{
        props: {
          nanpinSlideImage: {
            type: Array
          }
        },
        data(){
          return {
            Bigmodule1:[],
            Smallmodule1:[],
            RedTextmodule:{},
            Smallmodule2:[],
            Bigmodule3:[],
            Smallmodule3:[],
            likemodule:[]
          }
        },
        components:{
          Bigmodule1,
          Bigmodule2,
          Bookmodule,
          RedTextmodule,
          Likemodule
        },
        computed: {
          ...mapGetters(['currentIndex', 'valueChange']),
        },
        created:function () {
          let self = this
          this.$axios.get('/api/nanpinContent')
            .then((res) => {
              res = res.data
              if (res.error === 0) {
                self.Bigmodule1=res.data[0].Bigmodule
                self.Smallmodule1=res.data[0].Smallmodule
                self.RedTextmodule=res.data[1].Bigmodule
                self.Smallmodule2=res.data[1].Smallmodule
                self.Bigmodule3=res.data[2].Bigmodule
                self.Smallmodule3=res.data[2].Smallmodule
                self.likemodule=res.data[3].Smallmodule
              }
            })
            .catch((error) => {
              alert(error)
            })
          this.$nextTick(()=>{
            this.RECEIVE_LENGTH(4)
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
        }
    }
</script>

<style lang='less' scoped>
  .nanpin{
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
        width:500%;
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
            top:0
          }
        }
      }
      .square {
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 60px;
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
    .Bigmodule1{
      width: 100%;
      position: absolute;
      top:70px;
    }
    .Smallmodule1{
      width: 100%;
      position: absolute;
      top:250px;
    }
    .RedTextmodule{
      width: 100%;
      position: absolute;
      top:1035px;
    }
    .Smallmodule2{
      width: 100%;
      position: absolute;
      top:1250px;
    }
    .Bigmodule3{
      width: 100%;
      position: absolute;
      top:1740px;
    }
    .Smallmodule3{
      width: 100%;
      position: absolute;
      top:1845px;
    }
    img{
      width: 100%;
      position: absolute;
      top:3330px;
    }
    .likemodule{
      width: 100%;
      position: absolute;
      top:3470px;
    }
  }
</style>

