import axios from 'axios';
import config from '../../assets/js/conf/config';

// export default {
//   getProductsData () {
//     return axios.get(config.baseAPI + 'home/products', {
//       params: {
//         token: config.token,
//       },
//     });
//   },
// };

// 返回全部商品
export function getProductsData () {
  return axios.get(config.baseAPI + 'home/products', {
    params: {
      token: config.token,
    },
  });
}
