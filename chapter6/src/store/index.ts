import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //通过mutation来更改state
  state: {
    counter: 0
  },
  //用来进行同步操作
  mutations: {
    //默认传入state
    increment({counter}) {
      counter++
    },
    //可以使用对象解构语法
    decrement({counter}) {
      counter--
    }
  },
  //用来进行异步操作
  actions: {},
  modules: {}
})
