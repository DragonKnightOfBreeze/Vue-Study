<template>
  <div class="app">
    <h1>我的第一个Vue应用</h1>
    <!--用于路由跳转-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+user.id">
      用户
    </router-link>
    <router-link :to="{path: '/profile',query: userQuery}">
      档案
    </router-link>
    <hr>
    <!--使用方法+点击事件的路由跳转-->
    <button @click="goHome">首页</button>
    <button @click="goAbout">关于</button>
    <button @click="goUser">用户</button>
    <button @click="goProfile">档案</button>
    <hr>
    <!--用于路由显示-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        user: {id: 1, name: "Windea"},
        userQuery: {name: 'Windea', weapon: 'BreezesLanding'}
      }
    },
    methods: {
      goHome() {
        this.$router.replace("/home")
      },
      goAbout() {
        this.$router.push(("/about"))
      },
      goUser() {
        this.$router.push(`/user/${this.user.id}`)
      },
      goProfile() {
        this.$router.push({path: "/profile", query: this.userQuery})
      }
    }
  }
</script>

<style>

</style>

