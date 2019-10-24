<template>
  <div class="tab-bar-item" @click="itemClick">
    <img v-if="!isActive" :src="iconUrl" alt="">
    <img v-else :src="activeIconUrl" alt="">
    <div :style="activeStyle">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      text: String,
      to: String,
      iconUrl: String,
      activeIconUrl: {
        type: String,
        default: this.iconUrl
      },
      color: {
        type: String,
        default: "black"
      },
      activeColor: {
        type: String,
        default: "red"
      }
    },
    computed: {
      isActive() {
        //判断当前路由的路径，是否包含该组件的路径
        return this.$route.indexOf(this.path) !== -1
      },
      activeStyle() {
        //当抽取activeColor时，需要动态绑定style而非class
        return {color: this.isActive ? this.activeColor : this.color}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.to)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    font-size: 14px;

    flex: 1;
    text-align: center;
    height: 49px; /*较为合适的高度*/
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
  }
</style>
