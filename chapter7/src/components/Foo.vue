<template>
  <div>
    <BarComponent :user="{name:'Windea'}"></BarComponent>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BarComponent from "@/components/BarComponent.vue"

  export default Vue.extend({
    name: "Foo",
    components: {
      BarComponent
    }
  })
</script>

<style scoped>

</style>
