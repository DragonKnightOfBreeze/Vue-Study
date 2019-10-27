import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: Array<any>(),
  },
  getters: {
    cartCount(state, getters): number {
      return getters.cartList.length
    },
  },
  mutations: {
    addCart(state, info) {
      console.log(info)
      // 1.查看是否添加过
      const oldInfo: any = state.cartList.find(item => item.iid === info.iid)

      // 2.+1或者新添加
      if (oldInfo) {
        oldInfo.count += 1
      } else {
        info.count = 1
        info.checked = true
        state.cartList.push(info)
      }
    },
  },
  actions: {},
})

export default store
