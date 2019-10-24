import Cart from "@/views/cart/Cart.vue"
import Category from "@/views/category/Category.vue"
import Home from "@/views/home/Home.vue"
import Profile from "@/views/profile/Profile.vue"
import Vue from "vue"
import VueRouter, {RouteConfig} from "vue-router"

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    children: [],
  }, {
    path: "category",
    component: Category,
    children: [],
  }, {
    path: "/cart",
    component: Cart,
    children: [],
  }, {
    path: "profile",
    component: Profile,
    children: [],
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
