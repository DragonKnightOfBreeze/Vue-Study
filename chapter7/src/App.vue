<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from './components/HelloWorld.vue';
  import axios from 'axios'

  export default Vue.extend({
    name: 'app',
    components: {
      HelloWorld
    },
    methods: {
      //REGION 一般请求
      test() {
        axios({
          url: "https://httpbin.org"
        }).then(value => console.log(value.data))
      },
      testGet1() {
        axios.get("https://httpbin.org")
          .then(value => console.log(value.data))
          .catch(reason => console.error(reason))
      },
      async testGet2() {
        try {
          const data = (await axios.get("https://httpbin.org")).data
          console.log(data)
        } catch (e) {
          console.error(e)
        }
      },
      testGetWithParams() {
        axios.get(
          "https://httpbin.org",
          {params: {name: "Windea", weapon: "BreezesLanding"}}
        ).then(value => console.log(value.data))
      },
      async testPostWithBody() {
        return await axios.post(
          "https://httpbin.org",
          {name: "Windea", weapon: "BreezesLanding"}
        )
      },
      //REGION 并发请求

      async testConcurrent() {
        return await axios.all([
          axios.get("https://httpbin.org"),
          axios.get("https://httpbin.org", {params: {name: "Windea"}})
        ]).then(axios.spread((a, b) => {
          console.log(a)
          console.log(b)
          return {a, b}
        }))
      }
    },
    created() {
      this.test()
      this.testGet2()
    }
  });
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
