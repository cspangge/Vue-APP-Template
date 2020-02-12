import Vue from 'vue';
// 1. 引入Vuex对象
import Vuex from 'vuex';
// 2. 引入模块
import sample from './modules/sample';
import index from './modules/index';

// 3. 安装插件
Vue.use(Vuex);

// 4.创建store对象并导出
const store = new Vuex.Store({
  // 出现同名函数或变量的时候，为了保护其不被覆盖，
  // 在官方文档中还有个命名空间的概念
  modules: {
    // sample: sample,
    sample,
    index,
  },
});
export default store;
