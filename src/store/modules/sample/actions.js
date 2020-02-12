/*
 不要修改这个文件 不要修改这个文件 不要修改这个文件 不要修改这个文件
 不要修改这个文件 不要修改这个文件 不要修改这个文件 不要修改这个文件
 不要修改这个文件 不要修改这个文件 不要修改这个文件 不要修改这个文件
 不要修改这个文件 不要修改这个文件 不要修改这个文件 不要修改这个文件
 不要修改这个文件 不要修改这个文件 不要修改这个文件 不要修改这个文件
 不要修改这个文件 不要修改这个文件 不要修改这个文件 不要修改这个文件
 不要修改这个文件 不要修改这个文件 不要修改这个文件 不要修改这个文件
 */
// 存放异步读取/修改state的方法
import * as types from './mutation-types';

const actions = {
  updateMessageByAction ({ commit, }, msg) {
    // 模拟异步
    setTimeout(() => {
      // 需要调用mutations里的方法来更新msg
      commit(types.UPDATE_MESSAGE, msg);
    }, 3000);
  },
};

export default actions;
