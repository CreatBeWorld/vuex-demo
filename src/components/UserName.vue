<template>
  <div class="user-name-container">
    <span v-if="status === 'loading'">loading...</span>
    <template v-else-if="status === 'login'">
      <router-link :to="{ name: 'User' }">{{ user.name }}</router-link>
      <a href="" @click.prevent="handleLoginOut">退出</a>
    </template>
    <router-link :to="{ name: 'Login' }" v-else exact-path>登录</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'UserName',
  computed: {
    ...mapGetters('loginUser', ['status']),
    ...mapState('loginUser', ['user'])
  },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch('loginUser/loginOut')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style scoped lang="less">
.user-name-container {
  display: inline-block;
  a,
  span {
    margin-right: 15px;
  }
}
</style>
