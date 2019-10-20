import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Profile from './components/Profile.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home,
      meta: {
        title: "首页"
      },
      children: [
        {
          path: '',
          redirect: 'news'
        }, {
          path: 'news', //不需要在前面加斜线
          component: () => import('./components/HomeNews.vue')
        }, {
          path: "message",
          component: () => import('./components/HomeMessage.vue')
        }
      ]
    }, {
      path: '/about',
      component: () => import('./components/About.vue') //使用懒加载的方式
    }, {
      path: '/user/:id',
      component: User
    }, {
      path: '/profile',
      component: Profile
    }
  ],
  mode: "history"
})

//定义并注册路由守卫
//前置回调
router.beforeEach((to, from, next) => {
  //取匹配的第一个路由的元数据。
  document.title = to.matched[0].meta.title
  //最后必须调用该方法以进行路由跳转
  next()
})

//后置回调
router.afterEach((to, from) => {
  console.log("路由已跳转。")
})

export default router
