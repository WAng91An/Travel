<template>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 给swiper传递参数来生成下面的小点点
        loop: true // 支持循环轮播
      },
      swiperList: [ {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    /*添加了 scoped 属性，样式只对指定的组件起作用。而如果对小点点起作用，小点点是对swiper组件传递的一个参数，他属于swiper组件。我们必须使用>>>来打通组件，意思是指定组件下面的子组件如果遇到swiper-pagination-bullet-active类就会变成白色*/
    .wrapper >>> .swiper-pagination-bullet-active
        background: white
    .wrapper
        /*或者：width: 100%  height: 31.25vw*/
        width: 100%
        overflow: hidden
        height: 0
        background: #ccc
        padding-bottom: 26.66% /*31.25%*/
        .swiper-img
            width: 100%
</style>
