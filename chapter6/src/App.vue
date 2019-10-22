<!--suppress JSUnusedGlobalSymbols -->

<template>
  <div id="app">
    <h2>{{message}}</h2>
    <!--<h2>{{counter}}</h2>-->
    <h2>{{$store.state.counter}}</h2>

    <!--<button @click="counter&#45;&#45;">-</button>-->
    <!--<button @click="counter++">+</button>-->

    <!--<button @click="$store.state.counter&#45;&#45;">-</button>-->
    <!--<button @click="$store.state.counter++">-</button>-->

    <button @click="dec">-</button>
    <button @click="inc">+</button>
    <button @click="plusNum(2)">+2</button>

    <!--演示getters-->
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.pow2Count}}</h2>
    <h2>{{$store.getters.powNCount(3)}}</h2>

    <hr>

    <div>{{$store.state.user}}</div>
    <button @click="updateUserInfo">Update</button>

    <hr>

    <!--<hello-vuex :counter="counter"></hello-vuex>-->
    <hello-vuex></hello-vuex>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloVuex from "./components/HelloVuex.vue";
  import "vuex/types/vue";

  export default Vue.extend({
    name: 'app',
    data() {
      return {
        message: "当前计数：",
        // counter: 0
      }
    },
    methods: {
      inc() {
        this.$store.commit("increment")
      },
      dec() {
        this.$store.commit("decrement")
      },
      //第一种提交风格
      plusNum(num: number) {
        this.$store.commit("plus", num)
      },
      //第二种提交风格
      plusNum2(num: number) {
        //将整个 对象作为payload传递，使用payload.num取出
        this.$store.commit({
          type: "plus2",
          num
        })
      },
      updateUserInfo() {
        //返回的是Promise
        return this.$store.dispatch("updateInfo$")
          .then(() => {
            console.log("Update successful!")
          })
          .catch(() => {
            console.error("Update fail!")
          })
      },
      //可以直接使用异步方法语法
      async updateUserInfo2() {
        //异步方法语法中需要对Promise对象添加await关键字
        try {
          await this.$store.dispatch("updateInfo$");
          console.log("Update successful!")
        } catch (e) {
          console.error("Update fail!")
        }
      }
    },
    components: {
      HelloVuex
    }
  });
</script>

<style>

</style>
