<template>
  <div id="app">
    <h2>{{message}}</h2>
    <!--<h2>{{counter}}</h2>-->
    <h2>{{counter}}</h2>

    <!--<button @click="counter&#45;&#45;">-</button>-->
    <!--<button @click="counter++">+</button>-->

    <!--<button @click="$store.state.counter&#45;&#45;">-</button>-->
    <!--<button @click="$store.state.counter++">-</button>-->

    <button @click="dec">-</button>
    <button @click="inc">+</button>

    <!--<hello-vuex :counter="counter"></hello-vuex>-->
    <hello-vuex></hello-vuex>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloVuex from "./components/HelloVuex.vue";

  export default Vue.extend({
    name: 'app',
    data() {
      return {
        message: "当前计数：",
        // counter: 0
        counter: this.$store.state.counter
      }
    },
    methods: {
      inc() {
        this.$store.commit("increment")
      },
      dec() {
        this.$store.commit("decrement")
      }
    },
    components: {
      HelloVuex
    }
  });
</script>

<style>

</style>
