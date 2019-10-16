<template>
  <h2>我是关于内容</h2>
</template>

<script>
  export default {
    name: "About",
    methods: {
      goToHome() {
        this.$router.push("/home")
      }
    }
  }
</script>

<style scoped>

</style>
