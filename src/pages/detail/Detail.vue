<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="container">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data: function () {
    return {
      list: [ {
        tittle: '成人票',
        children: [ {
          tittle: '成人票一级',
          children: [ {
            tittle: '成人票一级'
          } ]
        }, {
          tittle: '成人票一级'
        }, {
          tittle: '成人票一级'
        } ]
      }, {
        tittle: '儿童票'
      }, {
        tittle: '特惠票'
      }, {
        tittle: '热卖票'
      } ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height: 50rem
</style>
