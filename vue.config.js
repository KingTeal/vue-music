// vue.config.js
module.exports = {
  indexPath: 'templates/index.html',
  assetsDir: 'static/',
  devServer: {
    open: false, //浏览器自动打开页面
    proxy: {
      '/api': {
        // 网易云：
        target: 'https://api.itooi.cn/music/netease/',
        // QQ：
        // target: 'https://api.itooi.cn/music/tencent/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}