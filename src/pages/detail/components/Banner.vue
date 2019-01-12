<template>
<div>
  <div class="banner" @click="handleGallaryClick" >
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201408/04/2658d1395f6f4208dd5af222f14343b1.jpg_600x330_b10230e8.jpg"/>
    <div class="banner-info">
      <div class="banner-tittle">
        天下第一泉城风景区（AAAAA景区）
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe650;</span>39
      </div>
    </div>
  </div>
  <Gallary @gallaryClose="handleGallaryClose" v-show="showImages" :imgs="imgs"></Gallary>
 </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data: function () {
    return {
      showImages: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1705/63/6394801722e3b3bca3.img.jpg_r_800x800_050c65d0.jpg', 'http://img1.qunarzz.com/sight/p0/1705/bd/bd762b97325c2019a3.img.jpg_r_800x800_61c453a5.jpg', 'http://img1.qunarzz.com/sight/p0/1705/6e/6ea8bb86e600c8e7a3.img.jpg_r_800x800_deabee4b.jpg']
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
