<template>
  <div>
    <h2>我是首页</h2>
    <!--使用绝对路由时需要使用完整路径-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <hr>
    <router-link to="news">新闻</router-link>
    <router-link to="message">消息</router-link>

    <!--保持组件存活-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
