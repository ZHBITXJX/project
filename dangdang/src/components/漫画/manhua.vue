<template>
    <div class='manhua'>
      <div class="header_slider" >
        <ul class="ul_slider" ref="ul_slider">
          <li v-for="item in  dongmanSlideImage.concat(dongmanSlideImage[0])" class="slider_li">
            <img :src=item alt="">
          </li>
        </ul>
        <div class="square">
          <ul class="square_ul"  ref="square_ul">
            <li class="square_li" v-for="(item,index) in  dongmanSlideImage" @click="scrollToSelectImg(index)"
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
      <div class="likemodule">
        <Likemodule :likemodule='likemodule'></Likemodule>
      </div>
    </div>

</template>

<script>
  import {mapActions, mapMutations,mapGetters} from 'vuex'
  import Bigmodule1 from "../Goods/Bigmodule1.vue"
  import Bookmodule from "../Goods/Bookmodule.vue"
  import Likemodule from "../男频/like.vue"
    export  default{
      props: {
        dongmanSlideImage: {
          type: Array
        }
      },
      data(){
      return {
        likemodule:{}
      }
    },
    components:{
        Bigmodule1,
        Bookmodule,
          Likemodule
    },
    computed: {
    ...mapGetters(['currentIndex', 'valueChange']),
    },
    created:function () {
      let self = this
      this.$axios.get('/api/dongmanContent')
        .then((res) => {
        res = res.data
      if (res.error === 0) {
        self.Bigmodule1=res.data[0].Bigmodule
        self.Smallmodule1=res.data[0].Smallmodule
        self.likemodule=res.data[1].Smallmodule
      }
    })
    .catch((error) => {
      alert(error)
    })
    this.$nextTick(()=>{
      this.RECEIVE_LENGTH(3)
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
  .manhua{
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
        width:400%;
        height: 150px;
        overflow: hidden;
        .slider_li {
          position: relative;
          flex: 1;
          height: 150px;
          float: left;
          width: 100%;
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
        width: 40px;
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
    .likemodule{
      width: 100%;
      position: absolute;
      top:1670px;
    }
  }
</style>

