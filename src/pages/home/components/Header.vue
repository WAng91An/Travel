<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
     <div class="header-right">
         <!-- {{this.$store.state.city}} -->
         {{currentCity}}
         <span class="iconfont arrow-icon">&#xe64a;</span>
     </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'Vuex'

export default {
  name: 'HomeHeader',
  computed: {
    // 把state中city数据映射到计算属性中的currentCity
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
  /*引入varibles.styl,用来存取一些共同的变量,比如背景颜色每个页面都用到
    stylesPath是通过build->webpack.base.conf.js修改的配置，抽取的一个替代变量
  */
  @import '~stylesPath/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    color: #fff
    background: $bgColor
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        background: #fff
        padding-left: .2rem
        line-height: .64rem
        height: .64rem
        color: #ccc
        margin-top: .12rem
        margin-left: .2rem
        border-radius: .1rem
        flex: 1 /*自动撑开*/
    .header-right
        min-width: 1.04rem /* 当盒子内容宽度大于 min-width的值时，盒子随着内容的增加而被撑大，没有上上限，但是 盒子宽度的最小值是 设置的 min-width 的值。 */
        padding: 0 .1rem
        float: right
        text-align: center
        color: #fff
        .arrow-icon
            margin-left: -.04rem
            font-size: .24rem
</style>
