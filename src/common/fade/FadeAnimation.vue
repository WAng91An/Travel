<template>
 <transition>
   <slot></slot>
 </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter
    opacity: 0; /*enter在第一帧的时候存在,在第二帧的时候被移除了.移除之后又变成了1,这个时候opacity发生了变化,下面就会监控到*/
  .v-enter-active
    transition: opacity 0.5s;  /*v-enter-active知道动画结束会一直存在,他利用transition来监控opacity的变化*/
  .v-leave-to
    opacity: 0; /*第二个瞬间才出现的这个类,第一个瞬间它的opcatity是1,第二个变成了0.这个时候下面的这个active可以监控到opcatity的变化!*/
  .v-leave-active
    transition: opacity 0.5s; /*动画执行的第一个瞬间到动画执行完毕,这个类是一直存在的.他可以时刻监控opcatity的变化*/
</style>
