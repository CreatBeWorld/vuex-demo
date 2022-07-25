import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";
import store from "../store"
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes
})
/*
  全局前置守卫：
  to：即将要进入的路由
  from：当前导航正要离开的路由
  next：确认要进入的路由（可以重新指定要进入的路由）
*/
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const status = store.getters["loginUser/status"]
    if (status === "loading") {
      //正在加载中，无法判断是否登录
      next({
        name: "Loading",
        query: {
          redirect: to.path
        }
      })
    } else if (status === "login") {
      //已登录直接放行
      next();
    } else {
      //未登录。跳转到登录页，并携带query
      alert("未登录，请先登录")
      next({
        name: "Login",
        query: {
          redirect: to.path
        }
      })
    }
  } else {
    next();
  }

})
export default router