<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script lang="ts">
  import MainTabBar from "@/components/content/MainTabBar.vue"
  import Vue from "vue"

  export default Vue.extend({
    name: "app",
    components: {
      MainTabBar,
    },
  })
</script>

<style>
  @import "assets/css/mormalize.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
