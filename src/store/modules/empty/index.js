// 引入模块sample对象拆分出来的文件，并导出store
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
