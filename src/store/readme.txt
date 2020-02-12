├── main.js
├── App.vue
├── components
├── views
│   ├── home
│   ├── index
│   ├── order
│   ├── page404
│   ├── reward
│   ├── sample
│   ├── user
│   └── ...
├── router
│   ├── index.js                    # 路由
└── store
    ├── index.js                    # 组装模块并导出store的地方
    └── modules                     # 拆分出来的各个模块目录
        └── sample                  # sample 模块，用来测试模块功能
            ├── index.js            # 引入模块sample对象拆分出来的文件，并导出store
            ├── state.js            # 存放所有变量
            ├── getters.js          # 获取变量的方法
            ├── mutation-types.js   # 对mutations的统一管理
            ├── mutations.js        # 存放同步读取/修改state的方法
            └── actions.js          # 存放异步读取/修改state的方法
        ├── index                   # 模块 index
        └── ...                     # 其它模块
