<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  /*引入varibles.styl,用来存取一些共同的变量,比如背景颜色每个页面都用到
    stylesPath是通过build->webpack.base.conf.js修改的配置，抽取的一个替代变量
  */
  @import '~stylesPath/varibles.styl';
  .header
    display: flex
    line-height: .86rem
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
        width: 1.24rem
        float: right
        text-align: center
        .arrow-icon
            margin-left: -.04rem
            font-size: .24rem
</style>
