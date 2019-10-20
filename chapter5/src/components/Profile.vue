<template>
  <div>
    <h3>用户信息</h3>
    <table>
      <tr>
        <td>名字</td>
        <td>武器</td>
      </tr>
      <tr>
        <td>{{userName}}</td>
        <td>{{userWeapon}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    computed: {
      userName() {
        return this.$route.query.name
      },
      userWeapon() {
        return this.$route.query.weapon
      }
    }
  }
</script>

<style scoped>

</style>
