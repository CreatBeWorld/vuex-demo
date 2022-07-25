<template>
  <form class="login-container" @submit.prevent="handleSubmit">
    <div class="form-item">
      <label for="loginId">账号：</label>
      <input type="text" id="loginId" v-model="loginId" />
    </div>
    <div class="form-item">
      <label for="loginPwd">密码：</label>
      <input type="password" id="loginPwd" v-model="loginPwd" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading">
        {{ loading ? "loading..." : "登录" }}
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
/*
mapState({
  loading:state=>state.loginUser.loading
  }
) ===  
{
  loading(){
    return this.$store.state.loginUser.loading
    }
}
*/
export default {
  name: "Login",
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  computed: mapState("loginUser", ["loading"]), //loginUser为命名空间(模块名)
  methods: {
    async handleSubmit() {
      const res = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (res) {
        const redirect = this.$route.query.redirect;
        if (redirect) {
          this.$router.push(redirect);
        } else {
          this.$router.push({
            name: "Home",
          });
        }
      } else {
        alert("账号或密码错误");
        this.loginId = "";
        this.loginPwd = "";
      }
    },
  },
};
</script>

<style scoped lang="less">
.form-item {
  width: 300px;
  display: flex;
  margin: 0 auto 15px;
  align-items: center;
  label {
    width: 70px;
  }
  input,
  button {
    outline: none;
    flex: 1 1 auto;
    padding: 10px 0;
    border-radius: 5px;
  }
  button {
    border: none;
    background-color: #50936c;
    color: #fff;
  }
}
</style>
