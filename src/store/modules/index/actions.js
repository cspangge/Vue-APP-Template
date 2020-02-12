// 存放异步读取/修改state的方法
import * as types from './mutation-types';
import { getProductsData } from '../../../api/get/index';

const actions = {
  getProducts (conText, payload) {
    getProductsData().then((response) => {
      const res = response.data;
      if (res.code === 200) {
        conText.commit(types.SET_PRODUCTS, { products: res.data, });
        // 判断success是否存在
        // if (payload.success) {
        //   payload.success();
        // }
      }
    });
  },
};

export default actions;
