module.exports = {
  publicPath: '/', // 根目录
  outputDir: 'dist', // 输出目录名
  assetsDir: 'assets', // 静态资源目录
  lintOnSave: true, // 是否开启eslint检测，false不开启
  productionSourceMap: false, // 生产环境下面开启sourceMap支持断点调试
  // 服务器配置
  devServer: {
    open: true, // 是否自动打开浏览器
    host: '0.0.0.0', // 0.0.0.0 支持局域网地址
    // host: "localhost",            // 0.0.0.0 支持局域网地址
    port: 8080, // 端口
    https: false, // 是否启动HTTPS
    proxy: {
      '/api': {
        target: 'https://pangge.app/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  // 配置开发者环境下的sourceMap支持断点调试
  // For loader options: webpack >= v2.0.0 no longer allows custom properties in configuration.
  // 'configureWebpack': {
  //   'devtools': 'source-map'
  // }
};
