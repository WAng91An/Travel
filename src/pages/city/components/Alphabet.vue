<template>
 <div class="list">
    <ul>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
    </ul>
 </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~stylesPath/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center /* 上面三句话就是使最右侧的字母表上下居中 */
    width: .4rem
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
