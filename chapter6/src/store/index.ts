import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //通过mutations来更改state
  //通过actions来进行异步操作
  state: {
    counter: 0,
    user: {
      name: "Windea",
      weapon: "BreezesLanding"
    }
  },
  //用来处理state并返回
  //默认春入state，可选传入getters
  getters: {
    pow2Count({counter}) {
      return counter * 2
    },
    //传入外部参数
    powNCount({counter}) {
      return (age: number) => counter * age;
    }
  },
  //用来进行同步操作
  //默认传入state
  //使用this.$store.commit(mutationName)来执行方法
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement({counter}) {
      counter--
    },
    //可以携带一些额外的参数，称为payload
    //如果参数是多个，就要以对象格式传递
    plus(state, num) {
      state.counter += num
    },
    plus2(state, payload) {
      state.counter += payload.num
    },
    updateInfo(state) {
      //这里不是新的属性，应该可以这样更改？
      state.user.name = "风游迩"
      state.user.weapon = "微风的吹息"
    }
  },
  //用来进行异步操作
  //使用this.$store.dispatch(actionName)来执行方法
  actions: {
    //传入的是store对象
    updateInfo$(context) {
      setTimeout(() => {
        //为什么这里的commit定位错误？？？
        context.commit("updateInfo")
      }, 1000)
    }
  },
  //可以在其中定义分离的模块，类型是[key: String]: Store
  //如何调用：this.$store.state.moduleA.username
  //对于getter、mutation和action
  //可以不需要显式声明模块：this.$store.commit("someMutation")
  modules: {
    moduleA: {
      state: {
        username: "admin"
      },
      getters: {
        //模块里面的getter可以有第三个参数：rootState
        //这种神奇的语法也不是不可以。。。
        fullName({username}, {}, {user}) {
          return `${username}: ${user.name}`
        }
      },
      actions: {
        //这里的context是模块对应的上下文
        updateUsername$(context) {
          //TODO
        }
      }
    }
  }
})
