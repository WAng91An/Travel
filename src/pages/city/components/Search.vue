<template>
<div>
  <div class="search">
     <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li v-for="item of list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  computed: {
    hasNoData: function () {
      return !this.list.length
    }
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword: function () {
      const this_ = this // 不想这样可以使用箭头函数
      if (this_.timer) {
        clearTimeout(this_.timer)
      }
      if (!this_.keyword) {
        this_.list = []
        return
      }
      this_.timer = setTimeout(function () {
        // 上面是性能优化，函数节流的方式。
        const result = []
        // 看一下传递过来的cities，先遍历cities对象，再遍历一个对象其中的数组。
        for (let i in this_.cities) {
          // 遍历A的数组、B的数组、C的..如果发现拼写或者名字含有keyword则加上结果数组
          this_.cities[i].forEach((value) => {
            if (value.spell.indexOf(this_.keyword) > -1 || value.name.indexOf(this_.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this_.list = result
      }, 100)
    }
  },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylesPath/varibles.styl';
  .search
    background: $bgColor
    height: .72rem
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    overflow: hidden  /*不添加这一句，当我们滑动a的所有城市的时候上面的搜索框跟着滑动*/
    position: absolute
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    background: #eee
    z-index: 1
    .search-item
      padding-left: .2rem
      line-height: .62rem
      background: #fff
      color: #666
</style>
