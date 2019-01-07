<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
              <img class="item-img" :src="item.imgUrl">
            </div>
            <div class="item-info">
                <p class="item-info-title">{{item.title}}</p>
                <p class="item-info-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      recommendList: [ {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_640x276_b2e54fbe.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_640x276_b2e54fbe.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_640x276_b2e54fbe.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_640x276_b2e54fbe.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_640x276_b2e54fbe.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_640x276_b2e54fbe.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylesPath/mixins.styl'
  .title
    margin-top: .2rem
    background: #eee
    line-height: .8rem
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 33.9% /*宽度为100%,高度33.33%*/
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    min-width: 0
    .item-info-title
      ellipsis()
      line-height: .54rem
      font-size: .32rem
    .item-info-desc
      ellipsis()
      line-height: .4rem
      color: #ccc
</style>
