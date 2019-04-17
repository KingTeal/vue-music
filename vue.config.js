// vue.config.js
module.exports = {
  indexPath: 'templates/index.html',
  assetsDir: 'static/',
  devServer: {
    open: false, //浏览器自动打开页面
    proxy: {
      '/api': {
        target: 'https://api.itooi.cn/music/netease/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}