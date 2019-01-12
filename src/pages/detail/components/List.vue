<template>
<div>
    <div class="detail-list" v-for="(item, index) of list" :key="index">
        <div class="item-tittle border-bottom">
            <div class="item-icon">
            </div>
            {{item.tittle}}
        </div>
        <div class="children-list" v-if="item.children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-icon
    position: relative
    top: .07rem
    left: .06rem
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  .item-tittle
    line-height: .8rem
    font-size: .28rem
    padding: 0 .2rem
  .children-list
    padding: 0 .2rem
</style>
