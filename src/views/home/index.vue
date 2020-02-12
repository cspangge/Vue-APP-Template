<template>
  <div>
    <router-view></router-view>
    <div class="bottom-nav">
      <ul :class="{home: true, active: nav1}" @click="goToPage('/index')">
        <li></li>
        <li>Home</li>
      </ul>
      <ul :class="{reward: true, active: nav2}" @click="goToPage('/reward')">
        <li></li>
        <li>Reward</li>
      </ul>
      <ul :class="{cart: true, active: nav3}" @click="goToPage('/order')">
        <li></li>
        <li>Cart</li>
      </ul>
      <ul :class="{user: true, active: nav4}" @click="goToPage('/user')">
        <li></li>
        <li>Account</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        nav1: true,
        nav2: false,
        nav3: false,
        nav4: false,
      };
    },
    methods: {
      goToPage (url) {
        if (url !== '/' + this.$route.name) {
          this.$router.replace(url);
        }
      },
      updatePage (name) {
        switch (name) {
          case 'index':
            this.nav1 = true;
            this.nav2 = false;
            this.nav3 = false;
            this.nav4 = false;
            break;
          case 'reward':
            this.nav1 = false;
            this.nav2 = true;
            this.nav3 = false;
            this.nav4 = false;
            break;
          case 'order':
            this.nav1 = false;
            this.nav2 = false;
            this.nav3 = true;
            this.nav4 = false;
            break;
          case 'user':
            this.nav1 = false;
            this.nav2 = false;
            this.nav3 = false;
            this.nav4 = true;
            break;
        }
      },
    },
    created () {
      document.title = this.$route.meta.title;
      this.updatePage(this.$route.name);
      // 这里是在模拟异步，所以使用setTimeout
    },
    beforeRouteUpdate (to, from, next) {
      document.title = to.meta.title;
      this.updatePage(to.name);
      next();
    },
  };
</script>

<style scoped>
  @import "../../assets/css/common/nav.css";
</style>
