import * as loginUserAPI from "@/api/user";
export default {
  namespaced: true, //开启命名空间，在组件中提交mutation、分发action、
  //以及使用getters都需要补充模块名如this.$store.commit("loginUser/setLoading", true)
  state: {
    loading: false,
    user: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async login(context, payload) {
      context.commit("setLoading", true)//在当前模块中可以省略模块名
      const res = await loginUserAPI.login(payload.loginId, payload.loginPwd)
      context.commit("setUser", res)
      context.commit("setLoading", false)
      return res
    },
    //context
    async loginOut(context) {
      context.commit("setLoading", true)
      await loginUserAPI.loginOut();
      context.commit("setUser", null)
      context.commit("setLoading", false)
    },
    async whoAmI(context) {
      context.commit("setLoading", true)
      const res = await loginUserAPI.whoAmI()
      context.commit("setUser", res)
      context.commit("setLoading", false)
    }
  },
  getters: {
    status(state) {
      if (state.loading) {
        return "loading"
      } else if (state.user) {
        return "login"
      } else {
        return "unlogin"
      }
    }
  }
}