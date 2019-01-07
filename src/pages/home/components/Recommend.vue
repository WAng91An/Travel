<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
                <p class="item-info-title">{{item.title}}</p>
                <p class="item-info-desc">{{item.desc}}</p>
                <button class="item-info-button">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [ {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
        title: '大连海洋世界游乐园',
        desc: '浪漫大连站，浪漫的海洋主题乐园'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_200x200_af967e35.jpg',
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
    .item
      display: flex
      height: 1.9rem
      overflow: hidden
      .item-img
        height: 1.7rem
        width: 1.7rem
        padding: .1rem
      .item-info
        flex: 1 /* 右侧的info部分自动撑开 */
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
        .item-info-button
          line-height: .44rem
          margin-top: .16rem
          background: #ff9300
          padding: 0 .2rem
          border-radius: .06rem
          color: #fff
</style>
