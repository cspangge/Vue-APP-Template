// 存放同步读取/修改state的方法
import * as types from './mutation-types';

const mutations = {
  [types.SET_PRODUCTS] (state, payload) {
    state.products = payload.products;
    // console.log(state.products);
  },
};

export default mutations;
