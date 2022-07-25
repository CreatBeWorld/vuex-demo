import Vue from "vue";
import Vuex from "vuex"
import loginUser from "./loginUser"
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    loginUser
  },
  strict: true //开启严格模式，不通不过提交mutation来修改state，会抛出错误
})
window.store = store
export default store