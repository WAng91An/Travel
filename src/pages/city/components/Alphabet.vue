<template>
 <div class="list">
    <ul>
       <li
       class="item"
       v-for="item of letters"
       :key="item"
       :ref="item"
       @click="handleClick"
       @touchstart.prevent="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       >{{item}}</li>
    </ul>
 </div>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters: function () {
      const letters = []
      // for(k in data)
      // {
      //   console.log("key"+k+";"+"value"+data[k]);
      // }
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 为什么使用updated？ 因为页面的数据是City.vue传递过来的，而初始化是一个空数组。那时候这个组件渲染的是没数据的，当传递过来真实的数据时会重新渲染，渲染完毕就会调用updated钩子函数
  updated: function () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick: function (e) {
      this.$emit('change', e.target.innerText) // 点击哪个字母就会向外触发change事件并附带那个字母的信息，父组件监听到。然后父组件把值在传给这个组件的兄弟组件
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        // 下面的操作是函数节流，当你在滑动的时候延迟16毫秒后执行改变列表位置，如果你再16毫秒之间有做了滚动，他会把上一次的秒表清除，重新执行这次做的事情。
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.startY
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20) // 点击通过距离顶本的距离做差，计算出当前手指位置字母在字母数组中的位置。 A是0，B是1
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
      // 上是进行了性能优化，函数节流，下面同样可以实现功能，性能差一点
      //   if (this.touchStatus) {
      //     const startY = this.startY
      //     const touchY = e.touches[0].clientY - 79
      //     const index = Math.floor((touchY - startY) / 20) // 点击通过距离顶本的距离做差，计算出当前手指位置字母在字母数组中的位置。 A是0，B是1
      //     if (index >= 0 && index < this.letters.length) {
      //       this.$emit('change', this.letters[index])
      //     }
      // }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
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
