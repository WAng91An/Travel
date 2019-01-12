<template>
<div>
  <div class="banner" @click="handleGallaryClick" >
    <img class="banner-img" :src="bannerImg"/>
    <div class="banner-info">
      <div class="banner-tittle">
        {{sightName}}
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe650;</span>{{gallaryImgsNub}}
      </div>
    </div>
  </div>
  <Gallary :gallaryImgs="gallaryImgs" @gallaryClose="handleGallaryClose" v-show="showImages" ></Gallary>
 </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data: function () {
    return {
      showImages: false
    }
  },
  methods: {
    handleGallaryClick: function () {
      this.showImages = true
    },
    handleGallaryClose: function () {
      this.showImages = false
    }
  },
  components: {
    Gallary
  },
  computed: {
    gallaryImgsNub: function () {
      return this.gallaryImgs.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) /*图片底部有一个从上到下的渐变色*/
      .banner-tittle
        flex: 1
        font-size: .28rem
        padding: 0 .2rem
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          margin-right: .1rem
          font-size: .24rem
</style>
