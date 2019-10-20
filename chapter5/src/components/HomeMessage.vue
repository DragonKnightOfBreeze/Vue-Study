<template>
  <h2>这是消息。</h2>
</template>

<script>
  export default {
    name: "HomeMessage",
    created() {
      console.log("HomeMessage组件已创建。")
    },
    destroyed() {
      console.log("HomeMessage组件已销毁。")
    }
  }
</script>

<style scoped>

</style>
