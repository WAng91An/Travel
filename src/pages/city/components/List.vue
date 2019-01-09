<template>
<!-- 分为 搜索框（另一个组件）、当前城市、热门城市、A、B开头的城市。
完成的效果为：必须确定的是必须只显示一屏的信息，不可以滑动，只要这样才可以使用滑动的插件做出原声的app滑动效果。
这样我们要给（当前城市->ABCD..城市）做一个定位，并且定位的时候上方要留出搜索框大小的空隙。使用overflow:hidden把此模块固定住，不可以滑动。后面使用better-scoll插件实现原声app的滑动。 -->
  <div class="list" ref="wrapper">
   <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
                <div class="button">
                  北京
                </div>
            </div>
        </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                <div class="button">
                  {{item.name}}
                </div>
            </div>
        </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
            <div class="item border-bottom"  v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
    </div>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: {
    hotCities: Array,
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylesPath/varibles.styl'
  /*下面代码是添加上下边框，更改颜色*/
  .border-topbottom
    &:before /*控制下边线*/
      border-color: #ccc
    $:after /*控制上边线*/
      border-color: #ccc
  .border-bottom
    &:before /*控制下边线*/
      border-color: #ccc
  .list
    position: absolute /* 必须保持当前页面仅仅显示一屏的城市，一个屏没办法动。通过插件来滑动 */
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden /*当父元素的高度是靠子元素撑开的时候，子元素浮动时，则在父元素使用overflow: hidden可以清除浮动，使得父元素的高度依旧是靠子元素撑开。当父元素自身设置了height属性值，则在父元素使用overflow: hidden可以使子元素超出父元素的那部分隐藏。*/
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          text-align: center
          margin: .1rem
          padding: .1rem 0
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
