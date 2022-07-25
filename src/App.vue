<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      |
      <router-link :to="{ name: 'News' }">News</router-link>
      |
      <user-name />
    </div>
    <router-view />
  </div>
</template>

<script>
import UserName from "./components/UserName";
export default {
  name: "App",
  components: {
    UserName,
  },
};
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .nav{
    margin-bottom: 50px;
  }
  a {
    color: inherit;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
