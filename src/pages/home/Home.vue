<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'Vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data: function () {
    return {
      lastCity: '', // header右侧最后显示的是哪个城市，用来判断是否重新发ajax调用数据
      swiperList: [], // ajax发过来的关于轮播图的数据
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo: function () {
      // 请求接口并且携带当前的城市名
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted: function () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated: function () {
    // 由于我们添加了<keep-alive>标签，我们从城市页面返回主页面的时候的数据是从内存中调用的。但是我们选择了新的城市，这是首页面需要加载新页面的信息，我们需要重新发ajax而不能是调用内存的数据了。
    // activated生命周期钩子（此钩子只有在使用了keep-alive标签时才会有）什么时候执行呢？ 当我们首次加载页面的时候，mounted和activated都会执行。我们现在去别的页面再回来的时候，只执行activated。也就是：当页面重新显示的时候，显示并不是加载！
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
