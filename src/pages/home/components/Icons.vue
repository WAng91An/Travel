<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                          <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconsList: [ {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }, {
        id: '00010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门经典'
      }]
    }
  },
  computed: {
    pages: function () {
      // 定义了一个二位数组：pages
      // 遍历iconsList，首先把pages[0]数组打满，然后pages[1]...
      const pages = []
      this.iconsList.forEach(function (item, index) {
        const page = Math.floor(index / 8) // 向下取整
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~stylesPath/varibles.styl'
    @import '~stylesPath/mixins.styl'
    .icons >>> .swiper-container /*保证swiper-container的区域是icons的区域，整个区域才可以左右滑动*/
        height: 0
        overflow: hidden
        padding-bottom: 50% /*width: 100%，padding-bottom: 50% 其实下面的padding就是宽度的一半*/
    .icon
        position: relative
        overflow: hidden
        float: left
        height: 0
        width: 25%
        padding-bottom: 25%
        .icon-img
            position: absolute /*icon分为图片和文字部分，设置图片的部分确定*/
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            /*box-sizing: border-box
            padding: .1rem*/
            .icon-img-content
                height: 100%
                display: block /*居中*/
                margin: 0 auto
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis() /* 抽取出来的方法：实现如果字体太多显示不全时显示... */
</style>
