import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

Vue.config.productionTip = false
//恢复登录状态(页面刷新，store中的state恢复初始值)
store.dispatch("loginUser/whoAmI")
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')