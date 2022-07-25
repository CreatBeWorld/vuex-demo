<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  name: "Loading",
  // watch: {
  //   //watch中属性名仅接受为.不能为[],所以改用vm.$watch或vuex中的watch方法
  //   ["$store.getters['loginUser/status']"](status) {
  //     console.log(status);
  //   },
  // },
  created() {
    this.unwatch = this.$store.watch(
      //返回一个取消观察函数，用来停止触发回调
      () => this.$store.getters["loginUser/status"],
      (status) => {
        if (status !== "loading") {
          const redirect = this.$route.query.redirect;
          if (redirect) {
            this.$router.push(redirect).catch(() => {});
          } else {
            this.$router.push({
              name: "Home",
            });
          }
        }
      },
      {
        immediate: true, //立即以表达式的当前值触发回调
      }
    );
  },
  destroyed() {
    this.unwatch();
  },
};
</script>

<style></style>
