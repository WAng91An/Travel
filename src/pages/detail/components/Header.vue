<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll: function () {
      const top = document.documentElement.scrollTop // 根据scrollTop，当向上滑动一段距离，显示header隐藏箭头
      if (top > 60) {
        let opacity = top / 140 // 根据top值的改变，会渐隐渐显。等到top为140 opacity为1.这个时候就全部显示
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated: function () {
    window.addEventListener('scroll', this.handleScroll) // 实现吸顶，window监听scroll事件，发生就调用handleScroll
  },
  deactivated: function () {
    window.removeEventListener('scroll', this.handleScroll) // 当此页面不显示的时候及时对全局的事件进行解绑
  }
}
</script>

<style lang="stylus" scoped>
@import '~stylesPath/varibles.styl'

  .header-abs
    height: .8rem
    line-height: .8rem
    width: .8rem
    position: absolute
    top: .2rem
    left: .2rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .5)
    text-align: center
    font-size: .06rem
    color: #fff
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
