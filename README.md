# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 首页开发

### 预备工作
1. 导入border.css
2. 导入reset.css
3. 安装[stylus](https://www.zhangxinxu.com/jq/stylus/)
``` bash
npm install stylus --save

npm install stylus-loader --save
```
4. 创建文件夹
```
src：源代码
    assets：静态文件
      styles：样式表
    pages：页面
      home：首页模块
        components：首页相关组件
    router:路由
    App.vue:根组件
    main.js:入口
```
### 开发首页
首页其实是一个个的组件组成的，比如头部组件、轮播图组件、图标区域组件、热门推荐相关组件。因此我们在home文件夹(home文件夹存放主页相关代码)下面建立一个Home.vue组件，在这个组件我们引入不同组件，便于维护，层次分明。

Home.vue:
```
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style lang="stylus" scoped>

</style>

```
Home.vue是一个组件，它分为三个部分：template、script、style。
- template
    - 头部区域组件
    - 轮播图组件
    - 图标区域组件
    - 热门推荐组件
    - 周末组件
- script
    -  组件名字：Home
    -  注册相关组件

### HomeHeader.vue
HomeHeader.vue是头部组件，头部相关的代码、样式、逻辑在此组件编写。
```
<template>
  ...
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~stylesPath/varibles.styl';
  ....
</style>

```

- template
    - 返回图标
    - 搜索框
    - 下三角图标
- script
    - 组件名字
- style
    - lang说明使用stylus语法
    - scoped:相关样式只在此组件生效

#### Iconfont

1. 登陆官网选择自己的图标，并且下载。
2. 把相应的字体文件、css文件拷贝到项目目录
3. iconfont.css源码中引入的字体文件的路径要对应
4. main.js文件import iconfont.css
5. 使用方式，其中的16进制去官网找

```
<span class="iconfont">&#xe632;</span>
```

#### CSS设置全局变量
确保安装了stylus
1. 创建文件varibles.styl
```
$bgColor = #00bcd4
```
2. 使用bgColor的Css中引入并且使用

```
<style lang="stylus" scoped>
  @import '~stylesPath/varibles.styl';
  .header
    background: $bgColor
</style>

```
3. 其中路径太冗长可以通过build->webpack.base.conf.js修改的配置，抽取的一个通用的路径。
