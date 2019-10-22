<template>
  <div>
    <!--{{counter}}-->
    {{$store.state.counter}}
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    props: {
      // counter: Number
    }
  }
</script>

<style scoped>

</style>
