<template>
  <h2>用户id：{{userId}}</h2>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        //可以使用`params["id"]`，也可以使用`params.id`
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>
