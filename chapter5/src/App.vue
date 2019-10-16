<template>
  <div class="app">
    <h1>我的第一个Vue应用</h1>
    <!--用于路由跳转-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!--用于路由显示-->
    <router-view></router-view>
  </div>
</template>

<style>

</style>
