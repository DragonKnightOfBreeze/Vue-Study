<template>
  <tab-bar>
    <tab-bar-item
        text="首页"
        icon-url="../../assets/img/tab-bar/home.svg"
        active-icon-url="../../assets/img/tab-bar/home_active.svg"
        to="/home"
    ></tab-bar-item>
    <tab-bar-item
        text="分类"
        icon-url="../../assets/img/tab-bar/category.svg"
        active-icon-url="../../assets/img/tab-bar/category_active.svg"
        to="/category"
    ></tab-bar-item>
    <tab-bar-item
        text="购物车"
        icon-url="../../assets/img/tab-bar/cart.svg"
        active-icon-url="../../assets/img/tab-bar/cart_active.svg"
        to="/cart"
    ></tab-bar-item>
    <tab-bar-item
        text="档案"
        icon-url="../../assets/img/tab-bar/profile.svg"
        active-icon-url="../../assets/img/tab-bar/profile_active.svg"
        to="/profile"
    ></tab-bar-item>
</template>

<script lang="ts">
  import Vue from "vue"
  import TabBar from "../common/tabbar/TabBar.vue"
  import TabBarItem from "../common/tabbar/TabBarItem.vue"

  export default Vue.extend({
    name: "MainTabBar",
    components: {TabBarItem, TabBar},
  })

</script>

<style scoped>

</style>
