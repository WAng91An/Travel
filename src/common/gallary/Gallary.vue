<template>
  <div class="container" @click="handleGallaryClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of gallaryImgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    gallaryImgs: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true, // 当监听到当前dom或者父组件的dom发生变化的时候。通过自我刷新，解决第一次打开图标轮播是无法滑动的问题
        observer: true
      }
    }
  },
  methods: {
    // 点击空白区域，关闭画廊
    handleGallaryClose: function () {
      this.$emit('gallaryClose')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container /*把下面的分页 1/10 定位到图片下面，由于.swiper-container添加了overflow: hidden，被隐藏了*/
    overflow: visible
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99 /* 上面代码移步：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html */
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem

</style>
