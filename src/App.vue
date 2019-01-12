<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!-- 不添加此标签：加载城市页面调用city.json,加载首页调用index.json。当再次去城市页面会重复调用city.json。添加后：把city.json放到内存，再次调用时不会请求ajax而是内存中取。但是还是可以修改缓存里面的数据，利用activated生命周期钩子 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
