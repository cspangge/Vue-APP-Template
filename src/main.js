import 'babel-polyfill'; // 让ES6转ES5兼容IE浏览器
import 'url-search-params-polyfill'; // 让IE兼容new URLSearchParams() ES6语法
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './assets/js/conf/config';
import feather from 'feather-icons';

Vue.config.productionTip = false;
Vue.prototype.$config = config;
Vue.use(feather);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
