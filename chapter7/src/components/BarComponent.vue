<template>
  <div></div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: "BarComponent",
    props: {
      user: Object
    },
    created() {
      this.user = {name: "风游迩"}
      //this.user.name = "微风的龙骑士"
    }
  })
</script>

<style scoped>

</style>
