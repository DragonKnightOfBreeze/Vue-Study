import Vue from "vue"
import VueLazyLoad from "vue-lazyload"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require("assets/img/common/placeholder.png"),
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
