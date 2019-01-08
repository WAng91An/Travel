<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylesPath/mixins.styl'
  .title
    background: #eee
    line-height: .8rem
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 37.09% /*宽度为100%,高度37.09%*/
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
